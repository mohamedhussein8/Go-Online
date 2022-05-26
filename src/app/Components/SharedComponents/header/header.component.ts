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
  price:number=0;
  bascket:IBasket|null=null;
  count:number|undefined=0;
  isUserLogged: Boolean;
  userName:string="";

  constructor(public basketService:BascketManagementService, private accountService: AccountService) {
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper";
    this.arrow="►";
    this.isUserLogged = false
    if(this.isUserLogged){
      basketService.getBascketById().subscribe(data=>{
        this.price=data.totalPrice;
        this.count=data.items?.length;
      });

    }


   }
  ngDoCheck(): void {
    this.isUserLogged = this.accountService.IsUserLogged();
    this.userName=this.accountService.GetUser().userName;

  }

  ngOnInit(): void {
    this.isUserLogged = this.accountService.IsUserLogged();
    console.log(this.accountService.GetUser());
    this.userName=this.accountService.GetUser().userName;

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
    this.userName="";
  }

}
