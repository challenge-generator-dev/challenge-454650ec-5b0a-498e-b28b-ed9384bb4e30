import { Product } from '../models/Product';
import { IProductRepository } from '../repositories/ProductRepository';
import { CreateProductDto } from '../validators/CreateProductDto';
import { ProductResponseDto } from '../types/ProductResponseDto';
import { DuplicateNameException } from '../exceptions/DuplicateNameException';
import { NegativePriceException } from '../exceptions/NegativePriceException';

export class ProductService {
    constructor(private readonly productRepository: IProductRepository) {}

    async getAllProducts(): Promise<ProductResponseDto[]> {
        return await this.productRepository.findAll();
    }

    async createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
        await CreateProductDto.validate(createProductDto);

        const existingProduct = await this.productRepository.findByName(createProductDto.name);
        if (existingProduct) {
            throw new DuplicateNameException('Product name already exists');
        }

        const product = new Product(
            createProductDto.name,
            createProductDto.price,
            createProductDto.stock,
            createProductDto.category
        );

        return await this.productRepository.save(product);
    }
}