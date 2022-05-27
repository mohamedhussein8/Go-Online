
export interface IAdminOrder {
  orderId:number,
  userEmail:string,
  orderState:number,
  orderDate:Date,
  shippedAddress:any,
  orderItems:any,
  totalPrice:number
}
