import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpException';

export interface ErrorResponse {
    statusCode: number;
    error: string;
    message: string;
    timestamp: string;
    path?: string;
    errors?: string[];
}

export function errorHandlerMiddleware(
    err: Error | HttpException,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    // TODO(reto): Implementar el manejo centralizado de errores
    // El middleware debe:
    // 1. Detectar si el error es una HttpException personalizada
    // 2. Si es HttpException, usar sus propiedades (statusCode, message, errors)
    // 3. Si no es HttpException, generar un error 500 genérico
    // 4. Registrar el error (consola o sistema de logs)
    // 5. Responder con el código de estado HTTP apropiado
    // 6. Incluir información útil para debugging en desarrollo
    // 7. En producción, no exponer detalles del stack trace
    
    // Estructura de respuesta esperada:
    // {
    //   statusCode: number,
    //   error: string,
    //   message: string,
    //   timestamp: string,
    //   path: string (opcional),
    //   errors?: string[] (para ValidationException)
    // }
    
    throw new Error('Function not implemented');
}