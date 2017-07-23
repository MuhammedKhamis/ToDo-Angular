import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class BodyGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if(this.auth.isAuth()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
