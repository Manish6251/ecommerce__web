import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  product: any;
  
  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.product = this.productService.getProducts();
    this.loadProductDetails();
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/app-shopping-cart']);
    console.log(`Added ${product.name} to cart.`);
  }
  loadProductDetails(): void {
    const idString = this.route.snapshot.paramMap.get('id');
  console.log(idString,"idstring");
    if (idString !== null && !isNaN(Number(idString))) {
      const productId = parseInt(idString, 10);
      console.log(productId,"productid")
  
      this.productService.getProductById(productId).subscribe(
        (product: any) => {
          if (product) {
            this.product = product;
            console.log(product);
          } else {
            console.error(`Product with ID ${productId} not found.`);
          }
        },
        (error: any) => {
          console.error('Error fetching product:', error);
        }
      );
    } else {
      console.error('Invalid product ID provided in route parameters.');
    }
  }
  
}
