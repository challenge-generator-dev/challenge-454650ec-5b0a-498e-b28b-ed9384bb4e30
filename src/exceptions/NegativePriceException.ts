import { HttpException } from './HttpException';

export class NegativePriceException extends HttpException {
    private readonly providedPrice: number;
    private readonly absoluteValue: number;
    private readonly minimumAllowedPrice: number;

    constructor(
        providedPrice: number,
        message: string = `Price cannot be negative. Provided: ${providedPrice}`
    ) {
        super(400, message, true);
        this.providedPrice = providedPrice;
        this.absoluteValue = Math.abs(providedPrice);
        this.minimumAllowedPrice = 0;
    }

    getProvidedPrice(): number {
        return this.providedPrice;
    }

    getAbsoluteValue(): number {
        return this.absoluteValue;
    }

    getMinimumAllowedPrice(): number {
        return this.minimumAllowedPrice;
    }

    getErrorCode(): string {
        return 'NEGATIVE_PRICE_ERROR';
    }

    toJSON(): object {
        return {
            error: this.getErrorCode(),
            message: this.message,
            statusCode: this.statusCode,
            details: {
                providedPrice: this.providedPrice,
                absoluteValue: this.absoluteValue,
                minimumAllowedPrice: this.minimumAllowedPrice,
                correction: this.suggestCorrection()
            },
            timestamp: new Date().toISOString()
        };
    }

    suggestCorrection(): string {
        if (this.providedPrice < 0) {
            return `Use absolute value: ${this.absoluteValue}`;
        }
        return 'Price must be greater than or equal to 0';
    }

    static validate(price: number): void {
        if (price < 0) {
            throw new NegativePriceException(price);
        }
    }

    static validateWithContext(
        price: number,
        productName: string,
        category: string
    ): void {
        if (price < 0) {
            const message = `Price cannot be negative for product "${productName}" in category "${category}". Provided: ${price}`;
            const exception = new NegativePriceException(price, message);
            throw exception;
        }
    }

    static fromDto(price: number, dto: { name: string; category: string }): NegativePriceException {
        const message = `Invalid price for product "${dto.name}" in category "${dto.category}": ${price}`;
        return new NegativePriceException(price, message);
    }

    isSevere(): boolean {
        return this.providedPrice < -1000;
    }

    getSeverityLevel(): 'low' | 'medium' | 'high' {
        const absPrice = Math.abs(this.providedPrice);
        if (absPrice > 10000) return 'high';
        if (absPrice > 1000) return 'medium';
        return 'low';
    }
}