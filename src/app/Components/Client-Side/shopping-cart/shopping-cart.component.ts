import { Component, DoCheck, OnInit } from '@angular/core';
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
   }

  ngOnInit(): void {
    this.bascketService.getBascketById().subscribe(data=>{
      this.Basket=data;
    });
  }
  deicreament(id:string){
    this.bascketService.deicreamentItem(id).subscribe( data=>{
        this.Basket=data;
      });
    }

  increament(id:string){
    this.bascketService.increamentItem(id).subscribe(data=>{
      this.Basket=data;
    });
  }

  changeItemQuantity(id:string, quantity:number){
    this.bascketService.changeItemQuantity(id, quantity).subscribe(data=>{
      this.Basket=data;
    });
  }
  RemoveItem(id:string){
    this.bascketService.RemoveItemById(id).subscribe(data=>{
      this.Basket=data;
    });
  }
}
