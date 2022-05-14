import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { BascketManagementService} from 'src/app/Services/bascket-management.service';
import { IBasketItem } from 'src/app/Models/IBasketItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currPrdID: number=0;
  item: IProduct;
  quantity:number;
  ProdList:IProduct[];

  constructor(private activatedRoute: ActivatedRoute,
              productService:ProductsManagementService,
              private basketService:BascketManagementService) {
     this.quantity=2;
     this.currPrdID= Number(this.activatedRoute.snapshot.paramMap.get('id'))
     this.item= productService.getProductById(this.currPrdID);
     this.ProdList=productService.getAll();


   }
   editRate(rate:number){
    this.item.Rate=rate;
    console.log(rate);

  }

  ngOnInit(): void {
  }
  AddToCart(){
    var newItem:IBasketItem={
      BasketId:this.basketService.Basket.Id,
      TotalPrice:this.quantity*this.item.Price,
      ProductQuantity:this.quantity,
      Product:this.item
    }
    this.basketService.AddToCart(newItem);

  }

}
