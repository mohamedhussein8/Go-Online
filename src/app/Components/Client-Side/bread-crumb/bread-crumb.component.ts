import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit,OnChanges {
  @Input('app-bread-crumb') page:string;
  path:string[];
  pageTitle:string;

  constructor() {
    this.page="Shop";
    this.path=this.page.split("/");
    this.pageTitle=this.path[this.path.length-1];
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.path=this.page.split("/");
    this.pageTitle=this.path[this.path.length-1];

  }

  ngOnInit(): void {
  }

}
