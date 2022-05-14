import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './Components/Client-Side/check-out/check-out.component';
import { ShopComponent } from './Components/Client-Side/shop/shop.component';
import { ShoppingCartComponent } from './Components/Client-Side/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './Components/SharedComponents/about-us/about-us.component';
import { BlogDetailsComponent } from './Components/SharedComponents/blog-details/blog-details.component';
import { BlogComponent } from './Components/SharedComponents/blog/blog.component';
import { ContactComponent } from './Components/SharedComponents/contact/contact.component';
import { HomeComponent } from './Components/SharedComponents/home/home.component';
import { LoginComponent } from './Components/SharedComponents/login/login.component';
import { ProductDetailsComponent } from './Components/SharedComponents/product-details/product-details.component';
import { RegisterComponent } from './Components/SharedComponents/register/register.component';


const routes: Routes = [ // First-match wins strategy
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Home', component:HomeComponent},
  {path:'Shop', component:ShopComponent},
  {path:'Shopping-Cart', component:ShoppingCartComponent},
  {path:'CheckOut', component:CheckOutComponent},
  {path:'ProductDetails/:id', component:ProductDetailsComponent},
  {path:'Blog', component:BlogComponent},
  {path:'Contact', component:ContactComponent},
  {path:'AboutUs', component:AboutUsComponent},
  {path:'Blog-Details', component:BlogDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
