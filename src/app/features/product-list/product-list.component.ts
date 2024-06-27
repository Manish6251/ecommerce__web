import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[]=[]; 
  selectedProduct: any;


  constructor(private router: Router, private productService: ProductService,private cartService: CartService,) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts(); // Assuming ProductService has a getProducts() method
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    
    this.router.navigate(['/app-shopping-cart']);
    // Implement logic to add product to shopping cart
    console.log(`Added ${product.name} to cart.`);
  }

   viewDetails(productId: number) {
    this.router.navigate(['/app-product-details',productId]);
   }
  
}
