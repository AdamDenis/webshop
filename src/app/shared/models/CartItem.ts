import {Clothes} from "./Clothes";

export class CartItem {
    constructor(cloth: Clothes) {
        this.cloth = cloth;
    }
    cloth: Clothes;
    quantity: number = 1;

    get price(): number {
        return this.cloth.price * this.quantity;
    }
}