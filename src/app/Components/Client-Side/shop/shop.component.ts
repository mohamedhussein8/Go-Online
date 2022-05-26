import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  ProdList: IProduct[]=[];
  rate:number;
  min:number;
  max:number;
  categories:ICategory[]=[];

  constructor(productService:ProductsManagementService, categoryService:CategoryManagementService) {
      productService.getAll().subscribe(data=>{
        this.ProdList=data;
    });
    this.rate=0;
    this.min=500;
    this.max=1000;
    categoryService.getAllCategory().subscribe(data=>{
      this.categories=data;
    });
  }

  ngOnInit(): void {
  }

}
