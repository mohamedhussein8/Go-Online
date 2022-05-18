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
import { FormsModule, NgModel,ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './Components/Client-Side/orders/orders.component';
import { OrderComponent } from './Components/Client-Side/order/order.component';
import { MainLayoutComponentComponent } from './Components/Client-Side/main-layout-component/main-layout-component.component';
import { AdminLayoutComponent } from './Components/Admin-Side/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './Components/Admin-Side/admin-header/admin-header.component';
import { AdminSidenavComponent } from './Components/Admin-Side/admin-sidenav/admin-sidenav.component';
import { DialogProductComponent } from './Components/Admin-Side/dialog-product/dialog-product.component';
import { CategoryProductComponent } from './Components/Admin-Side/category-product/category-product.component';
import { CategoryComponent } from './Components/Admin-Side/category/category.component';
import { ProductsDashboardComponent } from './Components/Admin-Side/products-dashboard/products-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatMenuModule}from '@angular/material/menu';
import{MatIconModule}from '@angular/material/icon';
import{MatDividerModule}from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HomeAdminComponent } from './Components/Admin-Side/home-admin/home-admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


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
    BlogDetailsComponent,
    OrdersComponent,
    OrderComponent,
    MainLayoutComponentComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    DialogProductComponent,
    CategoryProductComponent,
    CategoryComponent,
    ProductsDashboardComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
