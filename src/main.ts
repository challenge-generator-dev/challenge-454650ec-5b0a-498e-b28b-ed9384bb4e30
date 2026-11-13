import 'reflect-metadata';
import express, { Application } from 'express';
import { ProductController } from './controllers/ProductController';
import { ProductService } from './services/ProductService';
import { ProductRepository } from './repositories/ProductRepository';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

export function createApp(): Application {
    const app: Application = express();

    app.use(express.json());

    const productRepository = new ProductRepository();
    const productService = new ProductService(productRepository);
    const productController = new ProductController(productService);

    app.get('/products', (req, res) => productController.getProducts(req, res));
    app.post('/products', (req, res) => productController.createProduct(req, res));

    app.use(errorHandlerMiddleware);

    return app;
}