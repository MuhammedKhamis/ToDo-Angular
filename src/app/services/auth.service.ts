import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  signup(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
    this.router.navigate(['']);
  }
  signin(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
    this.router.navigate(['user']);
  }
  signout(){
    firebase.auth().signOut().catch(function(error) {
      console.log(error);
    });
    this.router.navigate(['/']);
  }

  isAuth(): boolean {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    }else {
      return false;
    }
  }
}
