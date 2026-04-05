import { Product } from "./Product";
import { Coin } from "./Coin";

export class VendingMachine {
    
    //ENCAPSULAMIENTO (ACCEDE MEDIANTE METODOS PUBLICOS)
    private currentCredit: number;
    private products: Product[];
    private coins: Coin[];
    
    constructor() {
        this.currentCredit = 0;
        this.products = [];
        this.coins = [];
    }


    public insertCoin(coin:Coin):void {
        this.currentCredit += coin.value;
    }

    public selectProduct(product: Product): Product | null {
        
        if (this.currentCredit >= product.price) {
            this.currentCredit -= product.price;
            
            return product;
        } else {
            
            
            return null;
        }
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public addCoin(coin: Coin): void {
        this.coins.push(coin);
    }

    public getCurrentCredit(): number {
        return this.currentCredit;
    }

    public getProducts(): Product[] {
        return this.products;
    }

    public getCoins(): Coin[] {
        return this.coins;
    }

    public getProductsDescription(): string[] {
        return this.products.map(product => product.getDescription());
    }


        
}
