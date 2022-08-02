import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUserService } from 'src/app/core/services/logged-in-user/logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService : LoggedInUserService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user = this.userService.getUser();

    if (user)
    {
      return true;
    }
    else
    {
        this.userService.goToLogin();
        return false;
    }
  }
  
}
