export interface APIResponseVM {
  success:boolean,
  data:any,
  messages:string[],
  pageNo?:number,
  TotslPages?:number,
  itemsPerPage?:number
}
