import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { CategoryCountVM } from 'src/app/ViewModels/CategoryCountVM';
import { productPagingVM } from 'src/app/ViewModels/productPagingVM';

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
  selectedCategory:string="";
  categories:CategoryCountVM[]=[];
  totalPages:number=1;
  pagenumber:number=1;
  totalItems:number=1;

  pagestartItemPrint:number=10*(this.pagenumber-1)+1;
  pageEndItemPrint:number=this.totalItems-this.pagestartItemPrint<10? this.totalItems: this.pagestartItemPrint+10;

  constructor(private productService:ProductsManagementService,
     categoryService:CategoryManagementService)
     {
       this.rate=0;
       this.min=500;
       this.max=1000;
       //object to pass



    //GetCategories & Count For All Pages
    categoryService.getAllCategory().subscribe(data=>{
      data.forEach(element => {
        productService.getCategoryCount(element.name).subscribe(_count=>{
          this.categories.push({category:element.name, count:_count})
        })
      });
    });

  }

  ngOnInit(): void {
    //Get All Products
    this.productService.getPage(new productPagingVM()).subscribe(data=>{
    this.ProdList=data?.result!;
    this.totalPages=Math.ceil(data?.count/10);
    this.totalItems=this.ProdList?.length;
  });
 }

  changeCategory(event:any){
    var target = event.target;
      if (target.checked)
        this.selectedCategory=target.defaultValue;
  }

  //Filtering
  filter(){
    //Send null if not filtered
    var filterObject:productPagingVM={
      CategoryName:this.selectedCategory,
      maxPrice:this.max,
      miniPrice:this.min,
      rate:this.rate,
      PageNumber:this.pagenumber,
      _pageSize:10

    };

    this.productService.getPage(filterObject).subscribe(data=>{
      this.ProdList=data?.result!;
      this.totalPages=Math.ceil(data?.count/10);
      this.totalItems=this.ProdList?.length;
    });

  }
  //Paging
  changePage(pagenumber:number){
    this.pagenumber=pagenumber+1;
  }



}
