import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/SharedComponents/header/header.component';
import { FooterComponent } from './Components/SharedComponents/footer/footer.component';
import { ProductComponent } from './Components/SharedComponents/product/product.component';
import { LoginComponent } from './Components/SharedComponents/login/login.component';
import { HomeComponent } from './Components/SharedComponents/home/home.component';
import { RegisterComponent } from './Components/SharedComponents/register/register.component';
import { ShopComponent } from './Components/Client-Side/shop/shop.component';
import { BreadCrumbComponent } from './Components/Client-Side/bread-crumb/bread-crumb.component';
import { ShoppingCartComponent } from './Components/Client-Side/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './Components/Client-Side/check-out/check-out.component';
import { ProductDetailsComponent } from './Components/SharedComponents/product-details/product-details.component';
import { BlogComponent } from './Components/SharedComponents/blog/blog.component';
import { ContactComponent } from './Components/SharedComponents/contact/contact.component';
import { AboutUsComponent } from './Components/SharedComponents/about-us/about-us.component';
import { BlogDetailsComponent } from './Components/SharedComponents/blog-details/blog-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ShopComponent,
    BreadCrumbComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ProductDetailsComponent,
    BlogComponent,
    ContactComponent,
    AboutUsComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
