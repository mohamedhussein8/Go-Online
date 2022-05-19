import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { RegisterVM } from 'src/app/ViewModels/registerVM';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public newUser: RegisterVM = new RegisterVM();
  public confimPass: string = "";

  constructor(private accountService: AccountService, private router: Router) {  }

  ngOnInit(): void {
  }

  Register()
  {
    this.accountService.Register(this.newUser).subscribe(data => {
      localStorage.setItem("User", JSON.stringify(data));
      this.router.navigate(['/Home']);
    });
  }

}
