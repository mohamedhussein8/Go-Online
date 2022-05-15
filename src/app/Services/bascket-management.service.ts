import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IBasket } from '../Models/IBasket';
import { IBasketItem } from '../Models/IBasketItem';

@Injectable({
  providedIn: 'root'
})
export class BascketManagementService {
  Basket:IBasket;

  constructor() {
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
  }


  getTotalPrice(): Observable<number>
  {
    return from([this.Basket.TotalPrice]);
  }
  getItemNumber(): Observable<number>
  {
    return from([this.Basket.Items.length]);
  }
  AddToCart(newItem:IBasketItem){
    this.Basket.Items.push(newItem);
    this.Basket.TotalPrice+= newItem.TotalPrice;

  }
  deicreamentItem(id:number){
     var item =this.Basket.Items.find(prd=> prd.Product.Id==id)!;
     if(item.ProductQuantity>1){
      item.ProductQuantity -=1;
      item.TotalPrice -=item.Product.Price;
      this.Basket.TotalPrice-=item.Product.Price;

     }
     else
      this.RemoveItemById(id);


  }
   increamentItem(id:number){
    var item =this.Basket.Items.find(prd=> prd.Product.Id==id)!;
    if(item.ProductQuantity<item.Product.NumInStock){
      item.ProductQuantity +=1;
      item.TotalPrice +=item.Product.Price;
      this.Basket.TotalPrice+=item.Product.Price;

     }

  }
  changeItemQuantity(id:number, quantity:number){
    var item =this.Basket.Items.find(prd=> prd.Product.Id==id)!;
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
    var item =this.Basket.Items.find(prd=> prd.Product.Id==id)!;
    if(item.ProductQuantity>item.Product.NumInStock)
    item.ProductQuantity=item.Product.NumInStock;
  }
  RemoveItemById(id:number){
    var item =this.Basket.Items.find(prd=> prd.Product.Id==id)!;
    this.Basket.TotalPrice-=item.TotalPrice;
    this.Basket.Items.splice(this.Basket.Items.findIndex(prd=> prd.Product.Id==id),1);
  }
  clearBasket(){
    this.Basket.Id=0;
    this.Basket.Items=[];
    this.Basket.TotalPrice=0;

  }

}
