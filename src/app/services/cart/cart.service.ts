import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import {Clothes} from "../../shared/models/Clothes";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  addToCart(cloth:Clothes): void {
    let cartItem = this.cart.items.find(item => item.cloth.id === cloth.id);
    if (cartItem) {
      this.changeQuantity(cloth.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(cloth));
  }
  removeFromCart(clothId: number): void {
    this.cart.items =
        this.cart.items.filter(item =>item.cloth.id != clothId)
  }

  changeQuantity(clothId: number, quantity:number){
    let cartItem = this.cart.items.find(item => item.cloth.id === clothId);
    if(!cartItem)return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
