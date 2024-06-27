import { Injectable } from '@angular/core';
import { Product } from './product.service';
export interface CartItem {
  product: Product;
  id: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  private cart: any[] = [];

  constructor() { }

  addToCart(product: any) {
    let item = this.cart.find(i => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ product: product, quantity: 1 });
    }
  }

  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCartItems(): any[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
