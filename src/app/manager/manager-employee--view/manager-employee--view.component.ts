import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from './employee';

@Component({
  selector: 'app-manager-employee--view',
  templateUrl: './manager-employee--view.component.html',
  styleUrls: ['./manager-employee--view.component.css']
})


export class ManagerEmployeeViewComponent implements OnInit {
  apiUrl = 'localhost:3000/api/user/3';
  Emp; Empp; employees;
  Nerd;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.Nerd = { id: '1000',name: 'mariacastela' , username: 'lola', email:'@lola', password: 'lola', type: '3'}
    //this.employees = this.getEmployees()
    this.http.get(this.apiUrl).subscribe((res: employee) => {
      this.Empp = JSON.stringify(res);
    }, error => {
      this.Empp = JSON.stringify(error)
    } )
    
  }
  getEmployees(){
    return this.http.get<employee>('http://localhost:3000/api/user/3')
  }
}
