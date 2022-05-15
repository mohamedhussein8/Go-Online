import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from 'src/app/Models/IOrder';
import { OrdersManagementService } from 'src/app/Services/orders-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryStatus } from 'src/app/Enums/DeliveryStatus';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input('app-order') order!:IOrder;
  isDetails:boolean=false;
  status:string="";

  constructor(orderService:OrdersManagementService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      if(paramMap.get('id')){
        this.isDetails=true;
      }
      this.order= orderService.getOrderById(Number(paramMap.get('id')));
      this.status=DeliveryStatus[this.order?.Status].toString();

  });
   }

  ngOnInit(): void {
  }

}
