import { Component, DoCheck, OnInit } from '@angular/core';
import { IBasket } from 'src/app/Models/IBasket';
import { AccountService } from 'src/app/Services/account.service';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  arrow:string;
  offcanvasMenuOverlayClass:string;
  offcanvasMenuWrapperClass:string;
  price:number;
  bascket:IBasket;
  isUserLogged: Boolean;

  constructor(public basketService:BascketManagementService, private accountService: AccountService) {
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper";
    this.arrow="►";
    this.price=0;
    this.bascket=basketService.Basket;
    this.isUserLogged = false
    //  this.basketService.getTotalPrice().subscribe(_price=>{
    //    this.price=_price;
    //  });

   }
  ngDoCheck(): void {
    this.isUserLogged = this.accountService.IsUserLogged();
  }

  ngOnInit(): void {
    this.isUserLogged = this.accountService.IsUserLogged();
  }
  openMenu(){
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay active";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper active";
  }
  CloseMenu(){
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper";
  }
  openDrop(){
    if(this.arrow!="▼")
      this.arrow="▼";
    else
      this.arrow="►";
  }
  
  LogOut(): void
  {
    this.accountService.Logout();
  }

}
