import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/Models/IBasket';
import { IOrder } from 'src/app/Models/IOrder';
import { OrdersManagementService } from 'src/app/Services/orders-management.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders!:IOrder[];

  constructor(private ordersService:OrdersManagementService) {
  //ordersService.getOrders().subscribe(data=>{
    //this.orders=data;
    //})
   }


  ngOnInit(): void {
  }

}
