import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IApi } from './Iapi';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Users } from './users';

@Injectable()
export class ApiService {
  currentUser;
  constructor(private http: HttpClient) { }

  getAllUsers(usertype: number){
    return this.http.get<Users[]>('http://localhost:3000/api/user/all/'.concat(usertype.toString()));
  }
  getUserCount(usertype: number){
    return this.http.get('http://localhost:3000/api/user/all/c/'.concat(usertype.toString()));
  }
  setCurrentUser(user: number){
    this.currentUser = user;
  }
}
