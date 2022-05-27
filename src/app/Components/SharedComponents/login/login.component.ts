import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { AuthUserVM } from 'src/app/ViewModels/authUserVM';
import { ConstantRoles } from 'src/app/ViewModels/constant-roles';
import { LoginVM } from 'src/app/ViewModels/loginVM';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logingUser: LoginVM;
  public errorMessage: string;
  public serverError: boolean;
  constructor(private accountService: AccountService, private router: Router) { 
    this.logingUser =  new LoginVM();
    this.errorMessage = "";
    this.serverError = false;
  }

  ngOnInit(): void {
  }

  Login()
  {
    this.errorMessage = "";
    this.serverError = false;
    
    this.accountService.Login(this.logingUser).subscribe({
      next: data => {
        localStorage.setItem("User", JSON.stringify(data));
        
        let userRoles = this.accountService.GetUserRoles();

        if(userRoles.some( i => i === ConstantRoles.AdminRole))
          this.router.navigate(['/admin']);

        else
          this.router.navigate(['/Home']);
      },
      error: err => {
        this.serverError = true;
        
        if(typeof err["error"] == "string")
          this.errorMessage = err["error"];
        
        else if(err["error"].hasOwnProperty("errors"))
          for(const e of err["error"]["errors"])
            this.errorMessage += e; 
        
        else if(err["error"].hasOwnProperty("Email-UserName"))  
          for(const e of err["error"]["Email-UserName"])
            this.errorMessage += e; 
        
        else if(err["error"].hasOwnProperty("Login Refused"))  
          for(const e of err["error"]["Login Refused"])
            this.errorMessage += e; 

        else
          this.errorMessage = "Error has been occured, Please Try Again";

      }
    });
  }

}
