import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, map, Observable, retry, throwError } from 'rxjs';
import { IBasket } from '../Models/IBasket';
import { IBasketItem } from '../Models/IBasketItem';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';
import { GenericApihandlerService } from './generic-apihandler.service';


@Injectable({
  providedIn: 'root'
})
export class BascketManagementService {
  Basket:IBasket;
  private buscketTotalPriceSubject: BehaviorSubject<number>;

  constructor(private genericAPIHandler:GenericApihandlerService) {
    this.Basket={
      Id:0,
      Items:[
        { BasketId:0,  TotalPrice:30.00, ProductQuantity:1, Product:{Id:0,Name:"T-shirt Contrast Pocket",Image:"assets/img/shopping-cart/cart-1.jpg", Category: null, Description: "",  NumInStock: 5, Price: 30.00, Provider: null, Rate: 2, IsNew: false }},
        { BasketId:0,  TotalPrice:32.50, ProductQuantity:1, Product:{Id:1,Name:"Diagonal Textured Cap",Image:"assets/img/shopping-cart/cart-2.jpg", Category: null, Description: "",  NumInStock: 5, Price: 32.50, Provider: null, Rate: 2, IsNew: false }},
        { BasketId:0,  TotalPrice:47.00, ProductQuantity:1, Product:{Id:2,Name:"Basic Flowing Scarf",Image:"assets/img/shopping-cart/cart-3.jpg", Category: null, Description: "",  NumInStock: 5, Price: 47.00, Provider: null, Rate: 2, IsNew: false }},
        { BasketId:0,  TotalPrice:30.00, ProductQuantity:1, Product:{Id:3,Name:"Basic Flowing Scarf",Image:"assets/img/shopping-cart/cart-4.jpg", Category: null, Description: "",  NumInStock: 5, Price: 30.00, Provider: null, Rate: 2, IsNew: false }}
      ]
    , User: null,
      TotalPrice:139
    };

    this.buscketTotalPriceSubject=new BehaviorSubject<number>(this.TotalPrice);
  }
  get TotalPrice(): number
  {
    return this.Basket.TotalPrice;
  }

  getBascketById(id:number):Observable<IBasket>{
    return this.genericAPIHandler.getAll("/Basket").pipe(
      map((APIResponseVM:APIResponseVM) =>{
        return APIResponseVM.data;
      })
    );
    //return this.httpClient.get<IBasket> (`${environment.APIURL}/Basket?UserId=${id}`);
  }

  createBascket(UserId:number):Observable<IBasket>{
    var object:APIResponseVM ={
      success:true,
      data: JSON.stringify(this.Basket),
      messages:["Post new Basket"]
    }

    return this.genericAPIHandler.post("/Basket", object  ).pipe(
      map((APIResponseVM:APIResponseVM) =>{
        return APIResponseVM.data;
      })
      );
  }

  getTotalPrice(): Observable<number>
  {
    return this.buscketTotalPriceSubject.asObservable();
  }
  getItemNumber(): Observable<number>
  {
    if(this.Basket.Items==undefined)
      return from([Number(0)]);
    else
       return from([this.Basket.Items?.length])
  }
  AddToCart(newItem:IBasketItem){
    this.Basket.Items?.push(newItem);
    this.Basket.TotalPrice+= newItem.TotalPrice;

  }
  deicreamentItem(id:number){
     var item =this.Basket.Items?.find(prd=> prd.Product.Id==id)!;
     if(item.ProductQuantity>1){
      item.ProductQuantity -=1;
      item.TotalPrice -=item.Product.Price;
      this.Basket.TotalPrice-=item.Product.Price;

     }
     else
      this.RemoveItemById(id);


  }
   increamentItem(id:number){
    var item =this.Basket.Items?.find(prd=> prd.Product.Id==id)!;
    if(item.ProductQuantity<item.Product.NumInStock){
      item.ProductQuantity +=1;
      item.TotalPrice +=item.Product.Price;
      this.Basket.TotalPrice+=item.Product.Price;

     }

  }
  changeItemQuantity(id:number, quantity:number){
    var item =this.Basket.Items?.find(prd=> prd.Product.Id==id)!;
    if(quantity==0)
      this.RemoveItemById(id);
    else if(quantity<=item.Product.NumInStock){
      item.ProductQuantity = quantity;
      this.Basket.TotalPrice-=item.TotalPrice;
      item.TotalPrice =item.Product.Price*quantity;
      this.Basket.TotalPrice+=item.TotalPrice;

     }
     else{
      item.ProductQuantity=item.Product.NumInStock;
      this.Basket.TotalPrice-=item.TotalPrice;
      item.TotalPrice =item.Product.Price*item.ProductQuantity;
      this.Basket.TotalPrice+=item.TotalPrice;
     }

  }
  checkAvalibality(id:number){
    var item =this.Basket.Items?.find(prd=> prd.Product.Id==id)!;
    if(item.ProductQuantity>item.Product.NumInStock)
    item.ProductQuantity=item.Product.NumInStock;
  }
  RemoveItemById(id:number){
    var item =this.Basket.Items?.find(prd=> prd.Product.Id==id)!;
    this.Basket.TotalPrice-=item.TotalPrice;
    this.Basket.Items?.splice(this.Basket.Items?.findIndex(prd=> prd.Product.Id==id),1);
  }
  clearBasket(){
    this.Basket.Id=0;
    this.Basket.Items=[];
    this.Basket.TotalPrice=0;

  }

}
