import { IsNotEmpty, IsNumber, IsPositive, IsString, validate } from 'class-validator';
import { ValidationException } from '../exceptions/ValidationException';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsNumber({}, { message: 'Price must be a number' })
    @IsPositive({ message: 'Price must be positive' })
    price: number;

    @IsNumber({}, { message: 'Stock must be a number' })
    @IsPositive({ message: 'Stock must be positive' })
    stock: number;

    @IsString()
    @IsNotEmpty({ message: 'Category is required' })
    category: string;

    constructor(name: string, price: number, stock: number, category: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

    static async validate(dto: CreateProductDto): Promise<void> {
        const errors = await validate(dto);
        if (errors.length > 0) {
            const errorMessages = errors.map(error => {
                const constraints = error.constraints || {};
                return Object.values(constraints).join(', ');
            });
            throw new ValidationException(errorMessages);
        }
    }
}