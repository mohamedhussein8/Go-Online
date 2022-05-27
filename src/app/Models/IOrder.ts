import { IBasketItem } from "./IBasketItem";
import { PaymentMethod } from "../Enums/PaymentMethod";
import { DeliveryStatus } from "../Enums/DeliveryStatus";
import { Address } from "./IAddress";

export interface IOrder{
  orderId:number;
  orderItems:IBasketItem[]|null,
  totalPrice:number,
  orderState:DeliveryStatus,
  orderDate:string,
  paymentMethod:PaymentMethod
  shippedAddress:Address
}
