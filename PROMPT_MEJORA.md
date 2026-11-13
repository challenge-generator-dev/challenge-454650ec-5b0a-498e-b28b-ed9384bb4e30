# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/validators/productValidator.ts` — La fase "Implementación de Endpoints Básicos" se implementa aqui: este archivo es el ejercicio.
- `src/middlewares/errorHandlerMiddleware.ts` — La fase "Implementación de Validaciones y Manejo de Errores" se implementa aqui: este archivo es el ejercicio.

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores, Expone endpoints REST con validacion de entrada y manejo centralizado de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construcción de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de una API REST para Catálogo de Productos
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Implementación de Endpoints Básicos — objetivo: Crear endpoints para listar y crear productos. — entregable (NO resolver): Endpoints GET /products y POST /products funcionales con validación básica de entradas.
- Fase 2: Implementación de Validaciones y Manejo de Errores — objetivo: Agregar validaciones avanzadas y manejo centralizado de errores. — entregable (NO resolver): Endpoints GET /products y POST /products con validaciones avanzadas y manejo centralizado de errores.
- Fase 3: Optimización y Refactorización — objetivo: Optimizar y refactorizar el código para mejorar la legibilidad y mantenibilidad. — entregable (NO resolver): Código refactorizado y optimizado para los endpoints GET /products y POST /products.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/app.spec.ts ===
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

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/jest": "30.0.0",
    "@types/supertest": "7.2.1",
    "@types/uuid": "11.0.0",
    "class-validator": "0.15.1",
    "express": "4.22.3",
    "jest": "30.5.2",
    "reflect-metadata": "0.2.2",
    "supertest": "7.3.2",
    "ts-jest": "29.4.15",
    "uuid": "14.0.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/models/Product.ts ===
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

// === ARCHIVO: src/validators/CreateProductDto.ts ===
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

// === ARCHIVO: src/types/ProductResponseDto.ts ===
export type ProductResponseDto = {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
};

// === ARCHIVO: src/repositories/ProductRepository.ts ===
import { Product } from '../models/Product';
import { ProductResponseDto } from '../types/ProductResponseDto';

export interface IProductRepository {
    findAll(): Promise<ProductResponseDto[]>;
    findByName(name: string): Promise<Product | null>;
    save(product: Product): Promise<ProductResponseDto>;
}

export class ProductRepository implements IProductRepository {
    private products: Product[] = [];

    async findAll(): Promise<ProductResponseDto[]> {
        return this.products.map(product => product.toResponseDto());
    }

    async findByName(name: string): Promise<Product | null> {
        return this.products.find(product => product.name === name) || null;
    }

    async save(product: Product): Promise<ProductResponseDto> {
        this.products.push(product);
        return product.toResponseDto();
    }
}

// === ARCHIVO: src/services/ProductService.ts ===
import { Product } from '../models/Product';
import { IProductRepository } from '../repositories/ProductRepository';
import { CreateProductDto } from '../validators/CreateProductDto';
import { ProductResponseDto } from '../types/ProductResponseDto';
import { DuplicateNameException } from '../exceptions/DuplicateNameException';
import { NegativePriceException } from '../exceptions/NegativePriceException';

export class ProductService {
    constructor(private readonly productRepository: IProductRepository) {}

    async getAllProducts(): Promise<ProductResponseDto[]> {
        return await this.productRepository.findAll();
    }

    async createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
        await CreateProductDto.validate(createProductDto);

        const existingProduct = await this.productRepository.findByName(createProductDto.name);
        if (existingProduct) {
            throw new DuplicateNameException('Product name already exists');
        }

        const product = new Product(
            createProductDto.name,
            createProductDto.price,
            createProductDto.stock,
            createProductDto.category
        );

        return await this.productRepository.save(product);
    }
}

// === ARCHIVO: src/controllers/ProductController.ts ===
import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { CreateProductDto } from '../validators/CreateProductDto';
import { HttpException } from '../exceptions/HttpException';

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            if (error instanceof HttpException) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        }
    }

    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const createProductDto = new CreateProductDto(
                req.body.name,
                req.body.price,
                req.body.stock,
                req.body.category
            );

            const product = await this.productService.createProduct(createProductDto);
            res.status(201).json(product);
        } catch (error) {
            if (error instanceof HttpException) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        }
    }
}

// === ARCHIVO: src/exceptions/HttpException.ts ===
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

// === ARCHIVO: src/exceptions/ValidationException.ts ===
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

// === ARCHIVO: src/middlewares/errorHandlerMiddleware.ts ===
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

// === ARCHIVO: src/exceptions/DuplicateNameException.ts ===
import { HttpException } from './HttpException';

export class DuplicateNameException extends HttpException {
    private readonly duplicateName: string;
    private readonly suggestedAlternatives: string[];

    constructor(
        name: string,
        existingNames: string[] = [],
        message: string = `Product with name "${name}" already exists`
    ) {
        super(409, message, true);
        this.duplicateName = name;
        this.suggestedAlternatives = this.generateSuggestions(name, existingNames);
    }

    getDuplicateName(): string {
        return this.duplicateName;
    }

    getSuggestedAlternatives(): string[] {
        return this.suggestedAlternatives;
    }

    getErrorCode(): string {
        return 'DUPLICATE_NAME_ERROR';
    }

    toJSON(): object {
        return {
            error: this.getErrorCode(),
            message: this.message,
            statusCode: this.statusCode,
            duplicateName: this.duplicateName,
            suggestedAlternatives: this.suggestedAlternatives,
            timestamp: new Date().toISOString()
        };
    }

    private generateSuggestions(baseName: string, existingNames: string[]): string[] {
        const suggestions: string[] = [];
        const baseLower = baseName.toLowerCase().trim();
        
        const suffixes = ['Pro', 'Plus', 'Premium', 'Standard', 'Basic', 'Lite', 'Ultra', 'Max'];
        
        for (const suffix of suffixes) {
            const suggestion = `${baseName} ${suffix}`;
            if (!existingNames.includes(suggestion) && suggestion.toLowerCase() !== baseLower) {
                suggestions.push(suggestion);
            }
            if (suggestions.length >= 3) break;
        }

        if (existingNames.length > 0) {
            const similarNames = existingNames
                .filter(existing => this.calculateSimilarity(baseLower, existing.toLowerCase()) > 0.5)
                .slice(0, 2);
            suggestions.push(...similarNames);
        }

        return suggestions.slice(0, 5);
    }

    private calculateSimilarity(str1: string, str2: string): number {
        if (str1 === str2) return 1;
        if (str1.length === 0 || str2.length === 0) return 0;

        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;

        if (longer.length === 0) return 1;

        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    private levenshteinDistance(str1: string, str2: string): number {
        const matrix: number[][] = [];

        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        return matrix[str2.length][str1.length];
    }

    static fromProduct(productName: string, existingProducts: Array<{ name: string }>): DuplicateNameException {
        const existingNames = existingProducts.map(p => p.name);
        return new DuplicateNameException(productName, existingNames);
    }
}

// === ARCHIVO: src/exceptions/NegativePriceException.ts ===
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

// === ARCHIVO: src/validators/productValidator.ts ===
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

// === ARCHIVO: src/main.ts ===
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

// === ARCHIVO: src/app.ts ===
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

// === ARCHIVO: src/server.ts ===
import { createApp } from './main';

const PORT = process.env.PORT || 3000;

const app = createApp();

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    console.log(`Endpoints disponibles:`);
    console.log(`  GET  http://localhost:${PORT}/products`);
    console.log(`  POST http://localhost:${PORT}/products`);
});
```
