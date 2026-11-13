// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { CreateProductDto } from './CreateProductDto';
import { DuplicateNameException } from '../exceptions/DuplicateNameException';
import { NegativePriceException } from '../exceptions/NegativePriceException';

export interface ProductValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

export interface IProductValidator {
    validateForCreate(dto: CreateProductDto): Promise<ProductValidationResult>;
    validatePrice(price: number): void;
    validateStock(stock: number): void;
    validateName(name: string): Promise<void>;
}

export class ProductValidator implements IProductValidator {
    private readonly existingProductNames: Set<string>;

    constructor(existingProductNames: string[] = []) {
        this.existingProductNames = new Set(existingProductNames.map(n => n.toLowerCase()));
    }

    async validateForCreate(dto: CreateProductDto): Promise<ProductValidationResult> {
      throw new Error('TODO(reto): validateForCreate');
    }

    validatePrice(price: number): void {
      throw new Error('TODO(reto): validatePrice');
    }

    validateStock(stock: number): void {
      throw new Error('TODO(reto): validateStock');
    }

    async validateName(name: string): Promise<void> {
      throw new Error('TODO(reto): validateName');
    }

    updateExistingProducts(names: string[]): void {
      throw new Error('TODO(reto): updateExistingProducts');
    }

    addExistingProduct(name: string): void {
      throw new Error('TODO(reto): addExistingProduct');
    }

    removeExistingProduct(name: string): void {
      throw new Error('TODO(reto): removeExistingProduct');
    }
}

export const createProductValidator = (existingNames: string[] = []): IProductValidator => {
  throw new Error('TODO(reto): createProductValidator');
};

export const validateProductBusinessRules = async (
    dto: CreateProductDto,
    validator: IProductValidator
): Promise<ProductValidationResult> => {
  throw new Error('TODO(reto): validateProductBusinessRules');
};