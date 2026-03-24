import { Product } from "./Product";

export class Drinks extends Product {

    public volume: number;

    //Herencia de Products.ts
    constructor(name: string, price: number, quantity: number, weight: number, volume: number) {
        super(name, price, quantity, weight); //Llamada al constructor de la clase padre (Product). El constructor de la clase hija recibe todos los valores y dentro del constructor de la hija con super la clase padre se encarga de la asignacion de estas.
        this.volume = volume;
    }

    public getDescription(): string {
        return `Bebida: ${this.name} (${this.volume}ml)`;
    }

}
