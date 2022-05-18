import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryAdminService } from 'src/app/Services/category-admin.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  categoryForm !:FormGroup ;
  actionBtn:string="Save";

  constructor(private formBuilder:FormBuilder, private catService:CategoryAdminService,
    private dialogRef: MatDialogRef<CategoryProductComponent>, @Inject(MAT_DIALOG_DATA) public editeData:any) { }

  ngOnInit(): void {
    this.categoryForm= this.formBuilder.group({
      Name:['',Validators.required]
    })
    if(this.editeData){
      console.log(this.editeData);
      this.actionBtn="Update";
      this.categoryForm.get('Name')?.setValue(this.editeData.name);
    }
  }
  addCategory(){
    const formData = new FormData();
        formData.append("Name",this.categoryForm.get('Name')?.value);
    if(!this.editeData){
      if(this.categoryForm.value){
        this.catService.addCategory(formData).subscribe({
          next:(res)=>{
            alert("Product added successfully");
            this.categoryForm.reset();
            this.dialogRef.close('Save');
           
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    }
    else {
      this.updateCategory(this.editeData.id,formData);
    }
  }
  updateCategory(id:number,FormData:FormData){
    this.catService.updateCategory(id,FormData).subscribe({
      next:(res)=>{
        alert("Product Updated Successfully");
        this.categoryForm.reset();
        this.dialogRef.close('Update');
      },
      error:()=>{
         alert("Error while updating ")
      }
    })
  }

}
