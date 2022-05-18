import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
   Promise<boolean | UrlTree> | boolean | UrlTree {
    
  let accessRoles = route.data["roles"] as Array<string>;
  let userRoles = this.accountService.GetUserRoles();
  for (const userRole of userRoles) {
    if (accessRoles.some( i => i === userRole))
      return true;
  }
 
  this.router.navigate(['/Home']);
  return false;
  }
  
}
