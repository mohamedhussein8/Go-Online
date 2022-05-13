import { ICategory } from "./ICategory";

export interface ISubCategory {
  Id:number;
  Name:String;
  Category: ICategory;
}
