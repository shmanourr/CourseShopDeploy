import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'products' , component : ProductsComponent},
  {path : 'orders' , component : MyOrdersComponent},
  {path : 'admin/orders' , component : AdminOrderComponent},
  {path : 'admin/products' , component : AdminProductComponent},
  {path : 'shopping-cart' , component : ShoppingCartComponent},
  {path : 'login' , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
