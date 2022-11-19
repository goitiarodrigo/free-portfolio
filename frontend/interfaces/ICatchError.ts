export interface Error {
    name: string;
    message: string;
    stack?: string;
}

export interface ErrorConstructor {
    new(message?: string): Error;
    (message?: string): Error;
    readonly prototype: Error;
}

declare var Error: ErrorConstructor;

export interface EvalError extends Error {
}

export interface EvalErrorConstructor extends ErrorConstructor {
    new(message?: string): EvalError;
    (message?: string): EvalError;
    readonly prototype: EvalError;
}

declare var EvalError: EvalErrorConstructor;

export interface RangeError extends Error {
}

export interface RangeErrorConstructor extends ErrorConstructor {
    new(message?: string): RangeError;
    (message?: string): RangeError;
    readonly prototype: RangeError;
}

declare var RangeError: RangeErrorConstructor;

export interface ReferenceError extends Error {
}

export interface ReferenceErrorConstructor extends ErrorConstructor {
    new(message?: string): ReferenceError;
    (message?: string): ReferenceError;
    readonly prototype: ReferenceError;
}

declare var ReferenceError: ReferenceErrorConstructor;

export interface SyntaxError extends Error {
}

export interface SyntaxErrorConstructor extends ErrorConstructor {
    new(message?: string): SyntaxError;
    (message?: string): SyntaxError;
    readonly prototype: SyntaxError;
}

declare var SyntaxError: SyntaxErrorConstructor;

export interface TypeError extends Error {
}

export interface TypeErrorConstructor extends ErrorConstructor {
    new(message?: string): TypeError;
    (message?: string): TypeError;
    readonly prototype: TypeError;
}

declare var TypeError: TypeErrorConstructor;

export interface URIError extends Error {
}

export interface URIErrorConstructor extends ErrorConstructor {
    new(message?: string): URIError;
    (message?: string): URIError;
    readonly prototype: URIError;
}

declare var URIError: URIErrorConstructor;