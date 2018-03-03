import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { IApi } from '../../services/api/Iapi';
import { Users } from '../../services/api/users';

@Component({
  selector: 'app-admin-users--list',
  templateUrl: './admin-users--list.component.html',
  styleUrls: ['./admin-users--list.component.css']
})
export class AdminUsersListComponent implements OnInit {
  users; u; uString;
  apiUsers; apiU; apiString;

  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
    this.getUserData()
    this.getApiData()
  }
  getUserData(){
    this.users = this.api.getUsers()
    this.u = JSON.parse(JSON.stringify(this.users))
    this.uString = JSON.stringify(this.users)
  }

  getApiData(){
    this.apiUsers = this.api.getApiUsers()
      .subscribe((response) => { this.apiU = response},
    (error) => {this.apiString = error},
    () => {this.apiString = 'complete'}
    )
  }
  

}
