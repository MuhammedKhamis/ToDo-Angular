import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {TodoManagerService} from "./todo-manager.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class BodyGuardService implements CanActivate {

  constructor(private todoManager: TodoManagerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.todoManager.getData() != null;
  }

}
