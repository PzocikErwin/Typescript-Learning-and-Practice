import { Product } from "./Product";
import { Coin } from "./Coin";

export class VendingMachine {
    public currentCredit: number;
    public products: Product[];
    public coins: Coin[];


    public insertCoin(coin:Coin):void {
        this.currentCredit += coin.value;
    }

    public selectProduct(product:Product):void {
        this.currentCredit -= product.price;
    }


}
