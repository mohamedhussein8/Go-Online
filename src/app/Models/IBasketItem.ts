import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface IBasketItem {
  BasketId:number;
  TotalPrice:number,
  ProductQuantity:number,
  Product:IProduct
}
