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
  Basket:IBasket;

  constructor(private bascketService:BascketManagementService) {
    this.Basket=bascketService.Basket;
   }

  ngOnInit(): void {
  }
  deicreament(id:number){
    this.bascketService.deicreamentItem(id);
  }
  increament(id:number){
    this.bascketService.increamentItem(id);
  }
  changeItemQuantity(id:number, quantity:number){
    this.bascketService.changeItemQuantity(id, quantity);
  }
  RemoveItem(id:number){
    this.bascketService.RemoveItemById(id);
  }

}
