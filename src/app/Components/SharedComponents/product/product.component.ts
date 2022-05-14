import { Component, Input, OnInit } from '@angular/core';
import { IBasketItem } from 'src/app/Models/IBasketItem';
import { IProduct } from 'src/app/Models/IProduct';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('app-product') item!:IProduct;


  constructor(private basketService:BascketManagementService) {
   }

  ngOnInit(): void {
  }
  ChangeColorSelection(event:any){
    [...event.target.parentElement.children].forEach(sib => {console.log(sib); console.log("A"); sib.classList.remove('active')});
    event.target.classList.add('active');


  }
  editRate(rate:number){
    this.item.Rate=rate;
    console.log(rate);

  }
  AddToCart(){
    var newItem:IBasketItem={
      BasketId:this.basketService.Basket.Id,
      TotalPrice:this.item.Price,
      ProductQuantity:1,
      Product:this.item
    }
    this.basketService.AddToCart(newItem);

  }

}
