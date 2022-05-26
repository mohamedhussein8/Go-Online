import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  @Output () toggleSidebarForMe:EventEmitter<any>=new EventEmitter();

   name :string='';
  constructor(private account:AccountService ) { }

  ngOnInit(): void {
    this.name= this.account.GetUser().fullName
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
   }
   Logout(){
     this.account.Logout();
   }
  


}
