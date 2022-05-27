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
  isUserLogged: Boolean;

  userName:string="";

  constructor( private accountService: AccountService) {
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper";
    this.arrow="►";

    this.isUserLogged = false

   }

  ngDoCheck(): void {
    this.isUserLogged = this.accountService.IsUserLogged();
    if(this.isUserLogged)
      this.userName=this.accountService.GetUser().userName;

  }

  ngOnInit(): void {
    this.isUserLogged = this.accountService.IsUserLogged();
    if(this.isUserLogged)
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
