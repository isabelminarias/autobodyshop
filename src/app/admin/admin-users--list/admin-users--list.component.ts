import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { IApi } from '../../services/api/Iapi';

@Component({
  selector: 'app-admin-users--list',
  templateUrl: './admin-users--list.component.html',
  styleUrls: ['./admin-users--list.component.css']
})
export class AdminUsersListComponent implements OnInit {
  headers: string[];
  userGirl;
  users: IApi;
  dataUser;
  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe( data => 
        this.dataUser = JSON.parse(JSON.stringify(data.valueOf()))  
    ) 
      
    this.api.getUsersResponse()
    .subscribe( resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map( key => `${key}: ${resp.headers.get(key)} `);
      this.users = { ... resp.body }
    })
      this.userGirl = JSON.parse(JSON.stringify(this.users));
  }
  getUserData(){
    
      
  }

}
