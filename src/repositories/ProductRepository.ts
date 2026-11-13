import { Product } from '../models/Product';
import { ProductResponseDto } from '../types/ProductResponseDto';

export interface IProductRepository {
    findAll(): Promise<ProductResponseDto[]>;
    findByName(name: string): Promise<Product | null>;
    save(product: Product): Promise<ProductResponseDto>;
}

export class ProductRepository implements IProductRepository {
    private products: Product[] = [];

    async findAll(): Promise<ProductResponseDto[]> {
        return this.products.map(product => product.toResponseDto());
    }

    async findByName(name: string): Promise<Product | null> {
        return this.products.find(product => product.name === name) || null;
    }

    async save(product: Product): Promise<ProductResponseDto> {
        this.products.push(product);
        return product.toResponseDto();
    }
}