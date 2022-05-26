import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBasket } from 'src/app/Models/IBasket';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  Basket!:IBasket;

  constructor(private bascketService:BascketManagementService) {
    this.bascketService.getBascketById().subscribe(data=>{
      data.items?.forEach(element => {
        data.totalPrice= element.price* element.quantity;
      });
      this.Basket=data;
    });
   // data.items?.forEach(element => {
     // this.bascket.totalPrice= element.price* element.quantity;
    //});
   }

  ngOnInit(): void {
  }
  deicreament(id:string){
    this.bascketService.deicreamentItem(id);
  }
  increament(id:string){
    this.bascketService.increamentItem(id);
  }
  changeItemQuantity(id:string, quantity:number){
    this.bascketService.changeItemQuantity(id, quantity);
  }
  RemoveItem(id:string){
    this.bascketService.RemoveItemById(id);
  }


}
