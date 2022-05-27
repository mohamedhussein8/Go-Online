import { Component, Input, OnInit } from '@angular/core';
import { IBasketItem } from 'src/app/Models/IBasketItem';
import { IProduct } from 'src/app/Models/IProduct';
import { AccountService } from 'src/app/Services/account.service';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('app-product') item!:IProduct;


  constructor(private basketService:BascketManagementService,
              private accountService:AccountService,
              private productService:ProductsManagementService) {
   }

  ngOnInit(): void {
  }
  ChangeColorSelection(event:any){
    [...event.target.parentElement.children].forEach(sib => {console.log(sib); console.log("A"); sib.classList.remove('active')});
    event.target.classList.add('active');


  }
  editRate(rate:number){
    this.productService.editProductRate(this.item.id, this.item.rate).subscribe(data=>{
      console.log(data);
    })

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
    console.log(this.item);
    if(this.item.numberInStock>0 && this.accountService.IsUserLogged())
       this.basketService.AddToCart(newItem).subscribe();

  }

}
