import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductController } from './controllers/ProductController';
import { ProductService } from './services/ProductService';
import { ProductRepository } from './repositories/ProductRepository';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const app: Application = express();

app.use(express.json());

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

app.get('/products', (req: Request, res: Response) => 
    productController.getProducts(req, res)
);

app.post('/products', (req: Request, res: Response) => 
    productController.createProduct(req, res)
);

app.use(errorHandlerMiddleware);

export default app;