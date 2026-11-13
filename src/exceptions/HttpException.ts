export class HttpException extends Error {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly timestamp: Date;
    public readonly isOperational: boolean;

    constructor(statusCode: number, message: string, isOperational: boolean = true) {
        if (statusCode < 100 || statusCode > 599) {
            throw new Error('Status code must be between 100 and 599');
        }
        
        if (!message || message.trim().length === 0) {
            throw new Error('Message cannot be empty');
        }

        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.timestamp = new Date();
        this.isOperational = isOperational;
        
        Object.setPrototypeOf(this, HttpException.prototype);
        Error.captureStackTrace(this, this.constructor);
    }

    public toJSON(): object {
        return {
            statusCode: this.statusCode,
            message: this.message,
            timestamp: this.timestamp.toISOString(),
            isOperational: this.isOperational,
            stack: this.stack
        };
    }

    public getHttpStatusText(): string {
        const statusTexts: Record<number, string> = {
            400: 'Bad Request',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Not Found',
            409: 'Conflict',
            422: 'Unprocessable Entity',
            500: 'Internal Server Error',
            502: 'Bad Gateway',
            503: 'Service Unavailable'
        };
        return statusTexts[this.statusCode] || 'Unknown Status';
    }

    public static isHttpException(error: unknown): error is HttpException {
        return error instanceof HttpException;
    }

    public getFormattedMessage(): string {
        return `[${this.statusCode}] ${this.getHttpStatusText()}: ${this.message}`;
    }
}