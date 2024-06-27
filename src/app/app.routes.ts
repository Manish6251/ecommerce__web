import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { CheckoutFormComponent } from './features/checkout-form/checkout-form.component';
import { ThankYouComponent } from './features/thank-you/thank-you.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'app-product-list',component:ProductListComponent},
    { path: 'app-shopping-cart', component: ShoppingCartComponent },
    {path: 'app-product-details/:id',component: ProductDetailsComponent},
    {path:'app-checkout-form',component:CheckoutFormComponent},
    {path:'app-thank-you',component:ThankYouComponent},
];
