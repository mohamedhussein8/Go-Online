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
  public errorMessage: string;
  public serverError: boolean;

  constructor(private accountService: AccountService, private router: Router) 
  { 
    this.errorMessage = "";
    this.serverError = false;
  }

  ngOnInit(): void {
  }

  Register()
  {
    this.errorMessage = "";
    this.serverError = false;

    this.accountService.Register(this.newUser).subscribe(
      {
        next: data => {
          localStorage.setItem("User", JSON.stringify(data));
          this.router.navigate(['/Home']);
        },
        error: err => {
          this.serverError = true;
          
          if(typeof err["error"] == "string")
            this.errorMessage = err["error"];
          
          else if(err["error"].hasOwnProperty("errors"))
            for(const e of err["error"]["errors"])
              this.errorMessage += e; 
          
          else if(err["error"].hasOwnProperty("Email"))  
            for(const e of err["error"]["Email"])
              this.errorMessage += e; 
          
          else if(err["error"].hasOwnProperty("UserName"))  
            for(const e of err["error"]["UserName"])
              this.errorMessage += e; 
  
          else
            this.errorMessage = "Error has been occured, Please Try Again";
        }  
      });
  }
}
