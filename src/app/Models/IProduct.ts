import { ICategory } from "./ICategory";
import { IUser } from "./IUser";
import { ISubCategory } from "./ISubCategory";

export interface IProduct {
  id:number;
  name:string;
  description:string;
  price:number,
  imagePath:string,
  numberInStock:number,
  category:ICategory|null,
  provider: IUser|null,
  isNew:boolean,
  rate:number
}
