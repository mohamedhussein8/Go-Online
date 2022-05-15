import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/Models/IBasket';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';
import { OrdersManagementService } from 'src/app/Services/orders-management.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  order:IBasket;
  constructor(private bascketService:BascketManagementService,
    private orderService:OrdersManagementService) {
    this.order=bascketService.Basket;
  }

  ngOnInit(): void {
  }
  PlaceOrder(){
    this.orderService.placeOrder();
    this.bascketService.clearBasket();
  }

}
