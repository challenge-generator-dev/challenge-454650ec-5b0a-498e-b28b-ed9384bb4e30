import 'reflect-metadata';
import request from 'supertest';
import app from './app';
import { ProductService } from './services/ProductService';
import { ProductRepository } from './repositories/ProductRepository';
import { Product } from './models/Product';

describe('App Integration Tests', () => {
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeAll(() => {
    productRepository = new ProductRepository();
    productService = new ProductService(productRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /health', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: 'OK' });
    });
  });

  describe('Product Endpoints', () => {
    it('should create a product', async () => {
      const mockProduct = {
        name: 'Test Product',
        price: 10.99,
        description: 'Test Description'
      };

      jest.spyOn(productService, 'createProduct').mockResolvedValueOnce({
        id: '1',
        ...mockProduct
      } as Product);

      const response = await request(app)
        .post('/products')
        .send(mockProduct)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(mockProduct.name);
    });

    it('should handle validation errors', async () => {
      const invalidProduct = {
        name: '',
        price: -5,
        description: ''
      };

      const response = await request(app)
        .post('/products')
        .send(invalidProduct)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should return 404 for non-existent product', async () => {
      jest.spyOn(productService, 'getProductById').mockResolvedValueOnce(null);

      const response = await request(app)
        .get('/products/999')
        .expect(404);

      expect(response.body).toHaveProperty('message', 'Product not found');
    });
  });
});