import { IProduct } from "../Models/IProduct";

export class getPagingVM {
  public  PageIndex:number=1;
  public  PageSize:number=10;
  public  Count:number=20;
  public  Result?:IProduct[];
}
