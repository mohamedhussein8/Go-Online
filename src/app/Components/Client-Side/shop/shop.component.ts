import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductsManagementService } from 'src/app/Services/products-management.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  ProdList: IProduct[];

  constructor(productService:ProductsManagementService) {
  this.ProdList = productService.getAll();
}

  ngOnInit(): void {
  }

}
