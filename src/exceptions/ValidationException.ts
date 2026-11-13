import { HttpException } from './HttpException';

export class ValidationException extends HttpException {
    public readonly errors: string[];
    public readonly field: string | null;
    public readonly validationType: string;

    constructor(errors: string[], field?: string, validationType: string = 'validation') {
        const message = errors.length > 0 
            ? `Validation failed: ${errors.join('; ')}` 
            : 'Validation failed';
        
        super(422, message, true);
        
        if (!Array.isArray(errors)) {
            throw new Error('Errors must be an array');
        }

        this.errors = errors;
        this.field = field ?? null;
        this.validationType = validationType;
        
        Object.setPrototypeOf(this, ValidationException.prototype);
    }

    public getErrors(): string[] {
        return [...this.errors];
    }

    public getFirstError(): string {
        return this.errors.length > 0 ? this.errors[0] : 'Unknown validation error';
    }

    public hasField(): boolean {
        return this.field !== null;
    }

    public getField(): string | null {
        return this.field;
    }

    public toJSON(): object {
        return {
            statusCode: this.statusCode,
            error: 'Validation Error',
            message: this.message,
            timestamp: this.timestamp.toISOString(),
            validationType: this.validationType,
            field: this.field ?? undefined,
            errors: this.errors,
            isOperational: this.isOperational
        };
    }

    public static fromSingleError(error: string, field?: string): ValidationException {
        return new ValidationException([error], field);
    }

    public static fromErrorMap(errorMap: Record<string, string[]>): ValidationException {
        const errors: string[] = [];
        for (const [field, messages] of Object.entries(errorMap)) {
            messages.forEach(msg => errors.push(`${field}: ${msg}`));
        }
        return new ValidationException(errors);
    }

    public merge(other: ValidationException): ValidationException {
        const combinedErrors = [...this.errors, ...other.errors];
        return new ValidationException(combinedErrors, this.field ?? undefined, this.validationType);
    }
}