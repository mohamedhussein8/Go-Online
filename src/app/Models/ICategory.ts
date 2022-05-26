import { IProduct } from "./IProduct";
import { ISubCategory } from "./ISubCategory";

export interface ICategory {
  id:number;
  name:String;
  products: IProduct[];
}
