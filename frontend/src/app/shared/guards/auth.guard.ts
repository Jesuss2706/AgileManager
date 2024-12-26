import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  bool: boolean = false;

  constructor(
    private route: Router,
  ) { }

  redirect(flag: boolean) {
    if (flag == false) {
      this.route.navigate(['/login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    if (token === '' || token === null || token === undefined) {
      this.bool = false;
    } else {
      this.bool = true;
    }

    this.redirect(this.bool);

    return true;
  }

}
