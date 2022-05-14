import { IBasketItem } from "./IBasketItem";
import { IUser } from "./IUser";

export interface IBasket {
  Id:number;
  TotalPrice:number,
  User: IUser|null,
  Items:IBasketItem[]
}
