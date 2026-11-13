import { v4 as uuidv4 } from 'uuid';

export class Product {
    private readonly _id: string;
    private _name: string;
    private _price: number;
    private _stock: number;
    private _category: string;

    constructor(name: string, price: number, stock: number, category: string, id?: string) {
        if (price < 0) {
            throw new Error('Price cannot be negative');
        }
        if (stock < 0) {
            throw new Error('Stock cannot be negative');
        }
        if (!name || name.trim().length === 0) {
            throw new Error('Name cannot be empty');
        }

        this._id = id || uuidv4();
        this._name = name;
        this._price = price;
        this._stock = stock;
        this._category = category;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (!value || value.trim().length === 0) {
            throw new Error('Name cannot be empty');
        }
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error('Price cannot be negative');
        }
        this._price = value;
    }

    get stock(): number {
        return this._stock;
    }

    set stock(value: number) {
        if (value < 0) {
            throw new Error('Stock cannot be negative');
        }
        this._stock = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    toResponseDto(): { id: string; name: string; price: number; stock: number; category: string } {
        return {
            id: this._id,
            name: this._name,
            price: this._price,
            stock: this._stock,
            category: this._category
        };
    }
}