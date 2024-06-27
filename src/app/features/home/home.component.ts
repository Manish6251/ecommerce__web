import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = '';
  subscribed: boolean = false;

  constructor(private router:Router){}

  productList(){
    this.router.navigate(['/app-product-list']);
  }

  subscribe() {
    this.subscribed = true;
  }
}
