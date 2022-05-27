import { IProduct } from "../Models/IProduct";

export class getPagingVM {
  public  pageIndex:number=1;
  public  pageSize:number=10;
  public  count:number=20;
  public  result?:IProduct[];
}
