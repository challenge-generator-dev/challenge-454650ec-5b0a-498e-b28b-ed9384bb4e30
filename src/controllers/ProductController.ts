import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { CreateProductDto } from '../validators/CreateProductDto';
import { HttpException } from '../exceptions/HttpException';

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            if (error instanceof HttpException) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        }
    }

    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const createProductDto = new CreateProductDto(
                req.body.name,
                req.body.price,
                req.body.stock,
                req.body.category
            );

            const product = await this.productService.createProduct(createProductDto);
            res.status(201).json(product);
        } catch (error) {
            if (error instanceof HttpException) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        }
    }
}