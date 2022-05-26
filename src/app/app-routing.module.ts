import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './Components/Client-Side/check-out/check-out.component';
import { OrdersComponent } from './Components/Client-Side/orders/orders.component';
import { OrderComponent } from './Components/Client-Side/order/order.component';
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
import { MainLayoutComponentComponent } from './Components/Client-Side/main-layout-component/main-layout-component.component';
import { AuthGuard } from './Guards/auth.guard';
import { ConstantRoles } from './ViewModels/constant-roles';
import { RolesGuard } from './Guards/roles.guard';
import { AdminLayoutComponent } from './Components/Admin-Side/admin-layout/admin-layout.component';
import { ProductsDashboardComponent } from './Components/Admin-Side/products-dashboard/products-dashboard.component';
import { CategoryComponent } from './Components/Admin-Side/category/category.component';
import { HomeAdminComponent } from './Components/Admin-Side/home-admin/home-admin.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponentComponent, children:[
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
  {path:'Orders', component:OrdersComponent},
  {path:'Order/:id', component:OrderComponent}
  ]
    },
    {path:'admin', component:AdminLayoutComponent,children:[
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeAdminComponent },
      {path:'product',component:ProductsDashboardComponent },
      {path:'category', component:CategoryComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
