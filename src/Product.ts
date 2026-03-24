export abstract class Product { //Clase abstracta (permite que no se puedan crear productos genericos
    //En su lugar obliga a que se creen clases mas especificas del producto que hereden de products
    
    
    // Aquí irán las atributos como name, price, quantity que todo producto tendria...

    public name: string;
    public price: number;
    public quantity: number;
    public weight: number;

    constructor(name: string, price: number, quantity: number, weight: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.weight = weight
    }

    public abstract getDescription(): string;


}


