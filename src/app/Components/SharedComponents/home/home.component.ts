import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductsManagementService } from 'src/app/Services/products-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ProdList!: IProduct[];
  days: number;
  minutes: number; //January is 0!
  hours: number;
  seconds: number;
  now: number;
  countDownDate: number;
  timeleft: number;
  id: any;
  constructor(private productService:ProductsManagementService) {
    this.productService.getFirstEightItems().subscribe(data=>{

      this.ProdList= data;

    });
    this.days = 0;
    this.minutes = 0; //January is 0!
    this.hours = 0;
    this.seconds = 0;
    this.timeleft = 0;
    this.now = new Date().getTime();
    this.countDownDate = new Date("May 31, 2022 16:37:52").getTime();

    this.id = setInterval(() => {
      this.now = new Date().getTime(),
      this.timeleft = this.countDownDate - this.now,
      this.days = Math.floor(this.timeleft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.timeleft % (1000 * 60)) / 1000);

    }, 1000);
   }

  ngOnInit(): void {
  }
  ChangeColorSelection(event: any) {
    [...event.target.parentElement.children].forEach(sib => {sib.classList.remove('active') });
    event.target.classList.add('active');


  }

}
