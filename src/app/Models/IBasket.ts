import { IBasketItem } from "./IBasketItem";
import { IUser } from "./IUser";

export interface IBasket {
  id:number;
  totalPrice:number,
  user: IUser|null,
  items:IBasketItem[]|null
}
