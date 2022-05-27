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
import { NotAuthGuard } from './Guards/not-auth.guard';


const routes: Routes = [
  {path: '', component: MainLayoutComponentComponent, children:[
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'Login', component:LoginComponent, canActivate: [NotAuthGuard]},
  {path:'Register', component:RegisterComponent, canActivate: [NotAuthGuard]},
  {path:'Home', component:HomeComponent},
  {path:'Shop', component:ShopComponent},
  {path:'Shopping-Cart', component:ShoppingCartComponent},
  {path:'CheckOut', component:CheckOutComponent,   canActivate: [AuthGuard, RolesGuard], data: {roles:[ConstantRoles.ClientRole]} },
  {path:'ProductDetails/:id', component:ProductDetailsComponent},
  {path:'Blog', component:BlogComponent},
  {path:'Contact', component:ContactComponent},
  {path:'AboutUs', component:AboutUsComponent},
  {path:'Blog-Details', component:BlogDetailsComponent},
  {path:'Orders', component:OrdersComponent, canActivate: [AuthGuard, RolesGuard], data: {roles:[ConstantRoles.ClientRole]} },
  {path:'Order/:id', component:OrderComponent,  canActivate: [AuthGuard, RolesGuard], data: {roles:[ConstantRoles.ClientRole]} }
  ]
    },
    {path:'admin', component:AdminLayoutComponent,children:[
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeAdminComponent ,canActivate: [AuthGuard, RolesGuard], data: {roles:[ConstantRoles.AdminRole]} },
      {path:'product',component:ProductsDashboardComponent, canActivate: [AuthGuard, RolesGuard], data: {roles:[ConstantRoles.AdminRole]} },
      {path:'category', component:CategoryComponent , canActivate: [AuthGuard, RolesGuard], data: {roles:[ConstantRoles.AdminRole]}}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
