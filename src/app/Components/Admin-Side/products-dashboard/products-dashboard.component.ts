import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsAdminService } from 'src/app/Services/products-admin.service';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

  // prdList !:any;
  
  displayedColumns: string[] = ['name','categoryName', 'imagePath','price', 'numberInStock','description','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog,private prdService:ProductsAdminService) { }

  ngOnInit(): void {
    this. getAllProdct();
  }
  openDialog() {
    this.dialog.open(DialogProductComponent, {
      width:'30%'
    }).afterClosed().subscribe(val => {
      if(val=='Save'){
        this.getAllProdct();
      }
    })
  }
  deleteProd(prdID:number){
    this.prdService.deleteProduct(prdID).subscribe(product =>{
      alert("product Deleted");
      this.prdService.getAllProducts().subscribe(products =>{
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        // this.prdList=products;
      })
    })

  }

  getAllProdct(){
    this.prdService.getAllProducts().subscribe(products =>{
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      // this.prdList=products;
    })
  }
  editProduct(row:any){
    this.dialog.open(DialogProductComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val=='Update'){
        this.getAllProdct();
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
