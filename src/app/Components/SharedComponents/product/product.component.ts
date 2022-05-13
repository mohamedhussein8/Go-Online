import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('app-product') item!:IProduct;


  constructor() {
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

}
