import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  logInForm: FormGroup;
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      'email': new FormControl('',
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")),
      'password': new FormControl()
    });
    this.signUpForm = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl(),
      'email': new FormControl('',
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")),
    });
  }
  onLogIn(){
    console.log(this.logInForm);
  }
  onSignUp(){

  }
}
