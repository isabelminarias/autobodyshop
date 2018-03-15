import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register--client',
  templateUrl: './login-register--client.component.html',
  styleUrls: ['./login-register--client.component.css']
})
export class LoginRegisterClientComponent implements OnInit {
  user: Object = {};
  constructor() { }

  ngOnInit() {
    this.user = {fname: '', lname:'', username:'', email:'', password:'', passwordConfirm:''}
  }

  onRegister(){
    
  }

}
