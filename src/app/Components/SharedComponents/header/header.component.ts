import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/Models/IBasket';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arrow:string;
  offcanvasMenuOverlayClass:string;
  offcanvasMenuWrapperClass:string;
  price:number;
  bascket:IBasket;

  constructor(public basketService:BascketManagementService) {
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper";
    this.arrow="►";
    this.price=0;
    this.bascket=basketService.Basket;
    // this.basketService.getTotalPrice().subscribe(_price=>{
    //   alert(_price)
    //   this.price=_price;
    // });

   }

  ngOnInit(): void {
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

}
