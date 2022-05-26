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
  bascket!:IBasket;
  totalPrice:number=0;

  constructor(public basketService:BascketManagementService) {
    this.offcanvasMenuOverlayClass="offcanvas-menu-overlay";
    this.offcanvasMenuWrapperClass="offcanvas-menu-wrapper";
    this.arrow="►";
    this.price=0;
    basketService.getBascketById().subscribe(data=>{
      data.items?.forEach(element => {
        this.totalPrice= element.price* element.quantity;
      });
      this.bascket=data;
    });


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
