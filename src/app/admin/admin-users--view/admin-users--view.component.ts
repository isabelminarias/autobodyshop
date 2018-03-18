import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from '../../services/api/users';
import { DatePipe } from '@angular/common';
import { ApiUsersService } from '../admin-services/api-users.service';

@Component({
  selector: 'app-admin-users--view',
  templateUrl: './admin-users--view.component.html',
  styleUrls: ['./admin-users--view.component.css']
})
export class AdminUsersViewComponent implements OnInit {
  userNum; usersCount; user;
  constructor(private uapi: ApiUsersService ) { }

  ngOnInit() {
    
  }

}
