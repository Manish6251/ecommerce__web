import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  constructor(private cartService: CartService,private router:Router,) { }
  cart: any[] =[];
  products: any[]=[];


  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
  }
  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product: product, quantity: 1 });
    }
  }
  
  incrementQuantity(item: any) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart[index].quantity++;
    }
  }

  decrementQuantity(item: any) {
    const index = this.cart.indexOf(item);
    if (index !== -1 && this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else if (index !== -1 && this.cart[index].quantity === 1) {
      this.cart.splice(index, 1);
    }
  }
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
  
  checkout(){
    this.router.navigate(["/app-checkout-form"])
  }
}
