import { Component, ElementRef, ViewChild } from '@angular/core';
import { IProduct } from './Models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoOnline';
  ProdList: IProduct[];
  days: number;
  minutes: number; //January is 0!
  hours: number;
  seconds: number;
  now: number;
  countDownDate: number;
  timeleft: number;
  id: any;


  constructor() {
    this.ProdList = [
      { Id: 1, Name: "Piqué Biker Jacket", Category: null, Description: "", Image: "assets/img/product/product-1.jpg", NumInStock: 5, Price: 67.24, Provider: null, Rate: 3, IsNew: true },
      { Id: 2, Name: "Piqué Biker Jacket", Category: null, Description: "", Image: "assets/img/product/product-2.jpg", NumInStock: 5, Price: 67.24, Provider: null, Rate: 2, IsNew: false },
      { Id: 3, Name: "Multi-pocket Chest Bag", Category: null, Description: "", Image: "assets/img/product/product-3.jpg", NumInStock: 5, Price: 43.50, Provider: null, Rate: 5, IsNew: true },
      { Id: 4, Name: "Diagonal Textured Cap", Category: null, Description: "", Image: "assets/img/product/product-4.jpg", NumInStock: 5, Price: 60.9, Provider: null, Rate: 1, IsNew: false },
      { Id: 5, Name: "Lether Backpack", Category: null, Description: "", Image: "assets/img/product/product-5.jpg", NumInStock: 5, Price: 31.37, Provider: null, Rate: 4, IsNew: true },
      { Id: 6, Name: "Ankle Boots", Category: null, Description: "", Image: "assets/img/product/product-6.jpg", NumInStock: 5, Price: 98.49, Provider: null, Rate: 5, IsNew: false },
      { Id: 7, Name: "T-shirt Contrast Pocket", Category: null, Description: "", Image: "assets/img/product/product-7.jpg", NumInStock: 5, Price: 49.66, Provider: null, Rate: 0, IsNew: true },
      { Id: 8, Name: "Basic Flowing Scarf", Category: null, Description: "", Image: "assets/img/product/product-8.jpg", NumInStock: 5, Price: 26.28, Provider: null, Rate: 0, IsNew: false }


    ];
    this.days = 0;
    this.minutes = 0; //January is 0!
    this.hours = 0;
    this.seconds = 0;
    this.timeleft = 0;
    this.now = new Date().getTime();
    this.countDownDate = new Date("May 23, 2022 16:37:52").getTime();

    this.id = setInterval(() => {
      this.now = new Date().getTime(),
      this.timeleft = this.countDownDate - this.now,
      this.days = Math.floor(this.timeleft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.timeleft % (1000 * 60)) / 1000);

    }, 1000);
  }
  ChangeColorSelection(event: any) {
    [...event.target.parentElement.children].forEach(sib => { console.log(sib); console.log("A"); sib.classList.remove('active') });
    event.target.classList.add('active');


  }
}
