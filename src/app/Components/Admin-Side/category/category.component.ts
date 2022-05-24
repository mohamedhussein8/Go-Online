import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAdminService } from 'src/app/Services/category-admin.service';
import { CategoryProductComponent } from '../category-product/category-product.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // catList !:any;

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog , private catService:CategoryAdminService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  openDialog() {
    this.dialog.open(CategoryProductComponent, {
      width:'30%'
    }).afterClosed().subscribe(val => {
      if(val=='Save'){
        this.getAllCategories();
      }
    })
  }
  getAllCategories(){
    this.catService.getAllCategory().subscribe(Categories =>{
      this.dataSource = new MatTableDataSource(Categories);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      
      // this.catList=Categories;
      // console.log(this.catList);
    })
  }

  deleteCategory(catID:number){
    this.catService.deleteCategory(catID).subscribe(Category =>{
      alert("product Deleted");
      this.catService.getAllCategory().subscribe(Categories =>{
        this.dataSource = new MatTableDataSource(Categories);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        // this.catList=Categories;
      })
    })
  }
  editProduct(row:any){
    this.dialog.open(CategoryProductComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val=='Update'){
        this.getAllCategories();
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
