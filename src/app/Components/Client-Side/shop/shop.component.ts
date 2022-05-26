import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { CategoryCountVM } from 'src/app/ViewModels/CategoryCountVM';

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
  categories:CategoryCountVM[]=[];
  num:number=0;
  pageId:number=0;

  constructor(productService:ProductsManagementService,
     categoryService:CategoryManagementService)
     {
      productService.getAll().subscribe(data=>{
        this.ProdList=data;
    });
    this.rate=0;
    this.min=500;
    this.max=1000;
    categoryService.getAllCategory().subscribe(data=>{
      data.forEach(element => {
        productService.getCategoryCount(element.name).subscribe(_count=>{

          this.categories.push({category:element.name, count:_count})
        })
      });

      });
    //productService.getPage(this.pageId).subscribe(
     // this.num=data.
   // );
  }

  ngOnInit(): void {
  }

}
