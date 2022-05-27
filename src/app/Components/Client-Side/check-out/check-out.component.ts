import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBasket } from 'src/app/Models/IBasket';
import { AccountService } from 'src/app/Services/account.service';
import { BascketManagementService } from 'src/app/Services/bascket-management.service';
import { OrdersManagementService } from 'src/app/Services/orders-management.service';
import { checkOutVM } from 'src/app/ViewModels/checkOutVM';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  order!:IBasket;
  userEmail:string =this.accountService.GetUser().email;
  street:string ="19 Mohamed Nagib";
  city:string ="Cairo";
  detailed:string ="By Tahrir School";
  state:string ="6 October";
  userdata!:checkOutVM;

  constructor(private bascketService:BascketManagementService,
    private orderService:OrdersManagementService,
    private accountService:AccountService, private router: Router) {
      this.bascketService.getBascketById().subscribe(data=>{
        this.order=data;
      })
  }

  ngOnInit(): void {

  }

  PlaceOrder(){
    this.userdata={
      userEmail:this.userEmail,
      address:{
        street:this.street,
        city:this.city,
        detailed:this.detailed,
        state:this.state
    }
  };
    this.orderService.placeOrder(this.userdata).subscribe();
    //this.router.navigate(['/Orders'])
    this.router.navigateByUrl('/Orders');
  }

}
