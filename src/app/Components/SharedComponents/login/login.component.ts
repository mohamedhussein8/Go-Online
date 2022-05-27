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
  constructor(private accountService: AccountService, private router: Router) { 
    this.logingUser =  new LoginVM();
  }

  ngOnInit(): void {
  }

  Login()
  {
    this.accountService.Login(this.logingUser).subscribe(data => {
        
      localStorage.setItem("User", JSON.stringify(data));
        
        let userRoles = this.accountService.GetUserRoles();
        
        if(userRoles.some( i => i === ConstantRoles.AdminRole))
          this.router.navigate(['/admin']);
          else
        this.router.navigate(['/Home']);
    });
  }

}
