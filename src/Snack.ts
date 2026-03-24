import { Product } from "./Product";

export class Snack extends Product {
    constructor(name: string, price: number, quantity: number, weight: number) {
        super(name, price, quantity, weight);
    }

    public getDescription(): string {
        return `Snack: ${this.name} (${this.weight}g)`;
    }

}
