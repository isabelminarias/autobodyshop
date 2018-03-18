import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../services/api/users';

@Injectable()
export class ApiUsersService {

  constructor(private http: HttpClient) { }
  countLink = 'http://localhost:3000/api/user/list';

  getUserCount(){
    return this.http.get<Users>(this.countLink)
  }
}
