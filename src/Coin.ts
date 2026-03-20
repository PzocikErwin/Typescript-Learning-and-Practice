export class Coin {
    // En TypeScript, al poner el modificador (public/private/readonly) en el constructor,
    // la propiedad se declara y se asigna automáticamente.
    constructor(public readonly value: number) {}
}
