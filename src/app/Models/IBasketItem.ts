import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface IBasketItem {
  id:string;
  price:number,
  quantity:number,
  numberInStock:number,
  productName:string
  productImage:string
}
