import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  logInForm: FormGroup;
  signUpForm: FormGroup;
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      'email': new FormControl('',
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")),
      'password': new FormControl('', Validators.minLength(6))
    });
    this.signUpForm = new FormGroup({
      'email': new FormControl('',
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")),
      'password': new FormControl('', Validators.minLength(6))
    });
  }

  onLogIn(){
    this.auth.signin(this.logInForm.value);
  }
  onSignUp(){
    const tmp = this.signUpForm.value;
    tmp.todos = [];
    this.auth.signup(tmp);
  }
}
