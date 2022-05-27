import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { BascketManagementService} from 'src/app/Services/bascket-management.service';
import { IBasketItem } from 'src/app/Models/IBasketItem';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currPrdID: number=0;
  item!: IProduct;
  quantity:number;

  constructor(private activatedRoute: ActivatedRoute,
              productService:ProductsManagementService,
              private basketService:BascketManagementService,
              private router:Router,
              private accountService:AccountService) {


     this.quantity=1;
     this.activatedRoute.paramMap.subscribe((paramMap)=>{
        this.currPrdID= Number(paramMap.get('id'))
        this.item.rate=0;

    });
     productService.getProductById(this.currPrdID).subscribe(data=>{
        this.item=data;
        this.item.rate=0;
     });


   }
   editRate(rate:number){
    this.item.rate=rate;

  }

  ngOnInit(): void {
  }
  AddToCart(){
    var newItem:IBasketItem={
      id:this.item.id.toString(),
      price:this.item.price,
      quantity:1,
      numberInStock:this.item.numberInStock,
      productName:this.item.name,
      productImage:this.item.imagePath
    }
    if(this.accountService.IsUserLogged())
       this.basketService.AddToCart(newItem).subscribe();
    this.router.navigateByUrl("/Shopping-Cart");

  }

}
