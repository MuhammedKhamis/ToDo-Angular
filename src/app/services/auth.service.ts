import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  signup(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function (response) {
      var updates = {};
      updates['/users/' + response.uid] = { email: user.email, password: user.password, todos: JSON.stringify(user.todos)};
      this.update(updates);
    })
      .catch(function(error) {
      alert('Email is already used');
    });
    this.router.navigate(['']);
  }
  signin(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(() => this.router.navigate(['user']))
      .catch(() => {
        this.router.navigate(['']);
        alert('Wrong Email or Password');
    });
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
  getCurrentUserID(): string {
    return firebase.auth().currentUser.uid;
  }
  getUserInfo(){
    return firebase.database().ref('users/' + this.getCurrentUserID());
  }
  getUser(): any{
    return firebase.auth().currentUser;
  }
  update(updates) {
    firebase.database().ref().update(updates);
  }
}
