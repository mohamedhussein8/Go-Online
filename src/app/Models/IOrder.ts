import { IBasketItem } from "./IBasketItem";
import { PaymentMethod } from "../Enums/PaymentMethod";
import { DeliveryStatus } from "../Enums/DeliveryStatus";

export interface IOrder{
  Id:number;
  Items:IBasketItem[]|null,
  TotalPrice:number,
  Address:string,
  Status:DeliveryStatus,
  DeliveryDate:string,
  paymentMethod:PaymentMethod
}
