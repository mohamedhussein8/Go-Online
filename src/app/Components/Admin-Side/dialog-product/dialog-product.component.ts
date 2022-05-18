import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryAdminService } from 'src/app/Services/category-admin.service';
import { ProductsAdminService } from 'src/app/Services/products-admin.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit {
  productForm !:FormGroup ;
  catList :any;
  actionBtn:string="Save";
  file:string='';

  constructor(private formBuilder:FormBuilder,private catService:CategoryAdminService,private prdService:ProductsAdminService,
    private dialogRef: MatDialogRef<DialogProductComponent>,@Inject(MAT_DIALOG_DATA) public editeData:any) { }

  ngOnInit(): void {
    this.getAllCategories();

    this.productForm= this.formBuilder.group({
      Name:['',Validators.required],
      Price:['',Validators.required],
      NumberInStock:['',Validators.required],
      CategoryId:['',Validators.required],
      ImageFile:['',Validators.required],
      Description:['',Validators.required]
    })

    if(this.editeData){
      console.log(this.editeData);
      this.actionBtn="Update";
      this.productForm.get('Name')?.setValue(this.editeData.name);
      this.productForm.controls['Price'].setValue(this.editeData.price);
      this.productForm.controls['NumberInStock'].setValue(this.editeData.numberInStock);
      this.productForm.controls['CategoryId'].setValue(this.editeData.categoryId);
      this.productForm.controls['ImageFile'].setValue(this.editeData.imagePath);
      this.productForm.controls['Description'].setValue(this.editeData.description);
    
    }
  }
  addProduct(){
    const formData = new FormData();
        formData.append("Name",this.productForm.get('Name')?.value);
        formData.append("Price",this.productForm.get('Price')?.value);
        formData.append("NumberInStock",this.productForm.get('NumberInStock')?.value);
        formData.append("CategoryId",this.productForm.get('CategoryId')?.value);
        formData.append("Description",this.productForm.get('Description')?.value);
         formData.append("ImageFile", this.file);
    if(!this.editeData){
      if(this.productForm.value){
        this.prdService.addProduct(formData).subscribe({
          next:(res)=>{
            alert("Product added successfully");
            this.productForm.reset();
            this.dialogRef.close('Save');
           
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    }
    else {
      this.updateProduct(this.editeData.id,formData);
    }
  }
  onchange(event:any){

    var reader = new FileReader();

      reader.onload = (event:any) => {
        console.log(event.target.result);
         
      }
      reader.readAsDataURL(event.target.files[0]);

      this.file=event.target.files[0];

  }
  updateProduct(id:number,FormData:FormData){
    this.prdService.updateProduct(id,FormData).subscribe({
      next:(res)=>{
        alert("Product Updated Successfully");
        this.productForm.reset();
        this.dialogRef.close('Update');
      },
      error:()=>{
         alert("Error while updating ")
      }
    })
  }
  getAllCategories(){
    this.catService.getAllCategory().subscribe(Categories =>{
       this.catList=Categories;
       
      // console.log(this.catList);
    })
  }

}
