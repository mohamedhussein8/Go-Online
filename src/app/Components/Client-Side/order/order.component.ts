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
  @Input() order!: IOrder;
  isDetails: boolean = false;

  constructor(orderService: OrdersManagementService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.isDetails = true;
      }

      if (paramMap.get('id')) {
        this.isDetails = true;
        orderService.getOrders().subscribe(orders => {
          this.order = orders.find(ord => ord.orderId == Number(paramMap.get('id')))!;
        })
      }

    });

  }
  ngOnInit(): void {
  }
}



