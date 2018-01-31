import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginclick: boolean = true;
  registerclick: boolean = false;
  passwordclick: boolean = false;
  hello: string = 'showme';
  constructor() {
    
  }
  ngOnInit() {
  }

  showregister() {
    this.loginclick = false;
    this.registerclick = true;
    this.passwordclick = false;
  }
  showpassword() {
    this.loginclick = false;
    this.registerclick = false;
    this.passwordclick = true;
  }
  showlogin() {
    this.loginclick = true;
    this.registerclick = false;
    this.passwordclick = false;
  }

}
