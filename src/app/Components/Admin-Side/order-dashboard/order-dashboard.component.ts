import { Component, OnInit } from '@angular/core';
import { IAdminOrder } from 'src/app/Models/iadmin-order';
import { AdminOrderService } from 'src/app/Services/admin-order.service';

import {
  formatDate
 }
  from '@angular/common';

import {
  Inject,
  LOCALE_ID }
  from '@angular/core';



@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  dataSource : IAdminOrder[] = [];
  constructor(private service:AdminOrderService) { }

  ngOnInit(): void {

    this.service.getAllOrders().subscribe(orders => this.dataSource = orders);
  }


  deleteProd(orderID:number)
  {
    this.service.deleteOrder(orderID).subscribe(order => {
      alert("Order Deleted");
      this.service.getAllOrders().subscribe(order => this.dataSource = order);
    })
  }

}
