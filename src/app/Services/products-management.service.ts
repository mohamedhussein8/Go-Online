import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService {
  ProdList: IProduct[];
  constructor() {
    this.ProdList = [
      { Id: 1, Name: "Piqué Biker Jacket", Category: null, Description: "", Image: "assets/img/product/product-1.jpg", NumInStock: 5, Price: 67.24, Provider: null, Rate: 3, IsNew: true },
      { Id: 2, Name: "Piqué Biker Jacket", Category: null, Description: "", Image: "assets/img/product/product-2.jpg", NumInStock: 5, Price: 67.24, Provider: null, Rate: 2, IsNew: false },
      { Id: 3, Name: "Multi-pocket Chest Bag", Category: null, Description: "", Image: "assets/img/product/product-3.jpg", NumInStock: 5, Price: 43.50, Provider: null, Rate: 5, IsNew: true },
      { Id: 4, Name: "Diagonal Textured Cap", Category: null, Description: "", Image: "assets/img/product/product-4.jpg", NumInStock: 5, Price: 60.9, Provider: null, Rate: 1, IsNew: false },
      { Id: 5, Name: "Lether Backpack", Category: null, Description: "", Image: "assets/img/product/product-5.jpg", NumInStock: 5, Price: 31.37, Provider: null, Rate: 4, IsNew: true },
      { Id: 6, Name: "Ankle Boots", Category: null, Description: "", Image: "assets/img/product/product-6.jpg", NumInStock: 5, Price: 98.49, Provider: null, Rate: 5, IsNew: false },
      { Id: 7, Name: "T-shirt Contrast Pocket", Category: null, Description: "", Image: "assets/img/product/product-7.jpg", NumInStock: 5, Price: 49.66, Provider: null, Rate: 0, IsNew: true },
      { Id: 8, Name: "Basic Flowing Scarf", Category: null, Description: "", Image: "assets/img/product/product-8.jpg", NumInStock: 5, Price: 26.28, Provider: null, Rate: 0, IsNew: false },
      { Id: 9, Name: "Piqué Biker Jacket", Category: null, Description: "", Image: "assets/img/product/product-9.jpg", NumInStock: 5, Price: 67.24, Provider: null, Rate: 0, IsNew: false },
      { Id: 10, Name: "Multi-pocket Chest Bag", Category: null, Description: "", Image: "assets/img/product/product-10.jpg", NumInStock: 5, Price: 43.48, Provider: null, Rate: 0, IsNew: false },
      { Id: 11, Name: "Diagonal Textured Cap", Category: null, Description: "", Image: "assets/img/product/product-11.jpg", NumInStock: 5, Price: 60.9, Provider: null, Rate: 0, IsNew: false },
      { Id: 12, Name: "Ankle Boots", Category: null, Description: "", Image: "assets/img/product/product-12.jpg", NumInStock: 5, Price: 98.49, Provider: null, Rate: 0, IsNew: false },
      { Id: 13, Name: "T-shirt Contrast Pocket", Category: null, Description: "", Image: "assets/img/product/product-13.jpg", NumInStock: 5, Price: 49.66, Provider: null, Rate: 0, IsNew: false },
      { Id: 14, Name: "Basic Flowing Scarf", Category: null, Description: "", Image: "assets/img/product/product-14.jpg", NumInStock: 5, Price: 26.28, Provider: null, Rate: 0, IsNew: false }

    ];
  }
  getProductById(id:number){
    return this.ProdList.filter(prd=> prd.Id==id)[0];

  }
  getAll(){
    return this.ProdList;

  }
  getFirstFourItems(){
    return this.ProdList.slice(0,4);

  }
}
