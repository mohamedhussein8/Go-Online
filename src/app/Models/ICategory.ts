import { ISubCategory } from "./ISubCategory";

export interface ICategory {
  Id:number;
  Name:String;
  Description:String;
  SubCategories: ISubCategory[];
}
