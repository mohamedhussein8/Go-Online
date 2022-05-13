import { ICategory } from "./ICategory";
import { IUser } from "./IUser";
import { ISubCategory } from "./ISubCategory";

export interface IProduct {
  Id:number;
  Name:string;
  Description:string;
  Price:number,
  Image:string,
  NumInStock:number,
  Category:ICategory|null,
  Provider: IUser|null,
  IsNew:boolean,
  Rate:number
}
