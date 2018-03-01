import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IApi } from './Iapi';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  usersUrl = 'https://jsonplaceholder.typicode.com/users/1';
  getUsers() {
    return this.http.get<IApi>(this.usersUrl);
  }
  getUsersResponse(): Observable<HttpResponse<IApi>>{
    return this.http.get<IApi>(
      this.usersUrl, { observe: 'response' })
  }
}
