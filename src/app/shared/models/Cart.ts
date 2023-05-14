import {CartItem} from "./CartItem";

export class Cart {
    items: CartItem[] = [];
    get totalPrice(): number{
        return this.items.reduce((totalPrice, item) => totalPrice + item.price, 0);
     /*   let totalPrice = 0;
        this.items.forEach(item => totalPrice += item.price);
        return totalPrice;*/
    }
}