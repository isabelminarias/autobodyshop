import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginclick: boolean;
  registerclick: boolean;
  passwordclick: boolean;
  registerempclick: boolean;
  hello: string;
  constructor() {
  }
  ngOnInit() {
  }

  showregister() {
    this.loginclick = false;
    this.registerclick = true;
    this.passwordclick = false;
    this.registerempclick = false;
  }
  showregisteremp() {
    this.loginclick = false;
    this.registerclick = false;
    this.passwordclick = false;
    this.registerempclick = true;
  }
  showpassword() {
    this.loginclick = false;
    this.registerclick = false;
    this.passwordclick = true;
    this.registerempclick = false;
  }
  showlogin() {
    this.loginclick = true;
    this.registerclick = false;
    this.passwordclick = false;
    this.registerempclick = false;
  }

}
