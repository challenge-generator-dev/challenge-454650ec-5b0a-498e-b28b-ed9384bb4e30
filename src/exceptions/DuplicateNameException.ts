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