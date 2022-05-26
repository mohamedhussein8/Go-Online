import { IBasketItem } from "./IBasketItem";
import { PaymentMethod } from "../Enums/PaymentMethod";
import { DeliveryStatus } from "../Enums/DeliveryStatus";

export interface IOrder{
  id:number;
  items:IBasketItem[]|null,
  totalPrice:number,
  address:string,
  status:DeliveryStatus,
  deliveryDate:string,
  paymentMethod:PaymentMethod
}
