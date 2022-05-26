import { Injectable } from '@angular/core';
import { DeliveryStatus } from '../Enums/DeliveryStatus';
import { PaymentMethod } from '../Enums/PaymentMethod';
import { IBasket } from '../Models/IBasket';
import { IOrder } from '../Models/IOrder';
import { BascketManagementService } from './bascket-management.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersManagementService {
  OrderList: IOrder[];

  constructor(private basketService:BascketManagementService) {
    this.OrderList = [{
      Id:0,
      Items:[
        { BasketId:0,  TotalPrice:30.00, ProductQuantity:1, Product:{Id:0,Name:"T-shirt Contrast Pocket",Image:"assets/img/shopping-cart/cart-1.jpg", Category: null, Description: "",  NumInStock: 5, Price: 30.00, Provider: null, Rate: 2, IsNew: false }},
        { BasketId:0,  TotalPrice:32.50, ProductQuantity:1, Product:{Id:1,Name:"Diagonal Textured Cap",Image:"assets/img/shopping-cart/cart-2.jpg", Category: null, Description: "",  NumInStock: 5, Price: 32.50, Provider: null, Rate: 2, IsNew: false }},
        { BasketId:0,  TotalPrice:47.00, ProductQuantity:1, Product:{Id:2,Name:"Basic Flowing Scarf",Image:"assets/img/shopping-cart/cart-3.jpg", Category: null, Description: "",  NumInStock: 5, Price: 47.00, Provider: null, Rate: 2, IsNew: false }},
        { BasketId:0,  TotalPrice:30.00, ProductQuantity:1, Product:{Id:3,Name:"Basic Flowing Scarf",Image:"assets/img/shopping-cart/cart-4.jpg", Category: null, Description: "",  NumInStock: 5, Price: 30.00, Provider: null, Rate: 2, IsNew: false }}
      ],
      TotalPrice:139,
      Address:"Cairo",
      Status:DeliveryStatus.OnWay,
      DeliveryDate:new Date().getTime().toString(),
      paymentMethod:PaymentMethod.CashOnDelivery
    },
{
    Id:1,
    Items:[
      { BasketId:0,  TotalPrice:30.00, ProductQuantity:1, Product:{Id:0,Name:"T-shirt Contrast Pocket",Image:"assets/img/shopping-cart/cart-1.jpg", Category: null, Description: "",  NumInStock: 5, Price: 30.00, Provider: null, Rate: 2, IsNew: false }},
      { BasketId:0,  TotalPrice:32.50, ProductQuantity:1, Product:{Id:1,Name:"Diagonal Textured Cap",Image:"assets/img/shopping-cart/cart-2.jpg", Category: null, Description: "",  NumInStock: 5, Price: 32.50, Provider: null, Rate: 2, IsNew: false }},
        ],
    TotalPrice:62,
    Address:"Cairo",
    Status:DeliveryStatus.OnWay,
    DeliveryDate:new Date().getTime().toString(),
    paymentMethod:PaymentMethod.CashOnDelivery
  }

    ];
  }
  getOrderById(id:number){
    return this.OrderList.filter(ord=> ord.Id==id)[0];

  }
  placeOrder(){
    var order={
      Id:this.OrderList[this.OrderList.length-1].Id+1,
      Items:this.basketService.Basket.Items,
      TotalPrice:this.basketService.Basket.TotalPrice,
      Address:"Cairo",
      Status:DeliveryStatus.Pending,
      DeliveryDate:new Date().getTime().toString(),
      paymentMethod:PaymentMethod.CashOnDelivery
    };
    this.OrderList.push(order);

  }
}
