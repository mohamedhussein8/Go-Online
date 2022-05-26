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
  item!: IProduct;
  quantity:number;
  ProdList:IProduct[]=[];

  constructor(private activatedRoute: ActivatedRoute,
              productService:ProductsManagementService,
              private basketService:BascketManagementService) {


     this.quantity=2;
     productService.getProductById(this.currPrdID).subscribe(data=>{
      this.item=data;
     });
     productService.getFirstFourItems().subscribe(data=>{
      this.ProdList=data;
     });
     this.activatedRoute.paramMap.subscribe((paramMap)=>{
        this.currPrdID= Number(paramMap.get('id'))
    });


   }
   editRate(rate:number){
    this.item.rate=rate;
    console.log(rate);

  }

  ngOnInit(): void {
  }
  AddToCart(){
    console.log("hi");
    var basketItem:IBasketItem={
      id:this.item.id.toString(),
      price:this.item.price,
      quantity:this.quantity,
      numberInStock:this.item.numberInStock,
      productName:this.item.name,
      productImage:this.item.imagePath
    }

    this.basketService.AddToCart(basketItem);

  }

}
