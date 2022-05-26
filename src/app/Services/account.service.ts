import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginVM } from '../ViewModels/loginVM';
import { AuthUserVM } from '../ViewModels/authUserVM';
import { RegisterVM } from '../ViewModels/registerVM';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private seviceApi: string = environment.APIURL + "/Account";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient,  private router: Router) { }

  Login(logingUser: LoginVM) : Observable<AuthUserVM>
  {
    return this.httpClient.post<AuthUserVM>(this.seviceApi + "/login", JSON.stringify(logingUser), this.httpOptions);
  }

  Register(registerUser: RegisterVM) : Observable<AuthUserVM>
  {
    return this.httpClient.post<AuthUserVM>(this.seviceApi + "/register", JSON.stringify(registerUser), this.httpOptions);
  }

  IsUserLogged() : Boolean
  {
    if(!localStorage.hasOwnProperty("User"))
      return false;

    let user: AuthUserVM = this.GetUser();
    const now = (new Date()).getTime();

    if(now > user.expires.getTime())
    {
      localStorage.removeItem("User");
      return false;
    }

    return true;
  }

  GetToken(): string
  {
    let user: AuthUserVM = this.GetUser();
    return "Bearer " + user.token;
  }

  GetUser(): AuthUserVM
  {
    let user: any = localStorage.getItem("User");
    user = JSON.parse(user);
    
    return new AuthUserVM(user.fullName, user.userName, user.email, user.phoneNumber, user.roles, user.token, user.expires);
  }

  GetUserRoles(): string[] 
  {
    return this.GetUser().roles;
  }

  Logout()
  {
    localStorage.removeItem("User");
    this.router.navigate(['/Login']);
  }
}
