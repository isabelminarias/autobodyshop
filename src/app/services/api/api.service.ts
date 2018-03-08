import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IApi } from './Iapi';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Users } from './users';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  localUrl = 'http://localhost:3000/api/user/list';

  getUsers(){
    return this.http.get<IApi[]>(this.usersUrl)
  }
  getApiUsers(){
    return this.http.get<IApi[]>(this.localUrl)
  }
  getAllClients(){
    return this.http.get<Users[]>('http://localhost:3000/api/user/all/1')
  }
  getAllMechanics(){
    return this.http.get<Users[]>('http://localhost:3000/api/user/all/2')
  }
  getAllManagers(){
    return this.http.get<Users[]>('http://localhost:3000/api/user/all/3')
  }
  getAllAdmins(){
    return this.http.get<Users[]>('http://localhost:3000/api/user/all/4')
  }
  getAllUnasigned(){
    return this.http.get<Users[]>('http://localhost:3000/api/user/all/0')
  }
}
