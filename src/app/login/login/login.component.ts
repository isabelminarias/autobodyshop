import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {'username': 'user', 'password': 'code'}
  constructor() {
  }
  ngOnInit() {
  }

  SignIn(){
    
  }
}
