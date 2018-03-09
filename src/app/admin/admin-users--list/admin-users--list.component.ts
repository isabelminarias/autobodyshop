import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { IApi } from '../../services/api/Iapi';
import { Users } from '../../services/api/users';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-users--list',
  templateUrl: './admin-users--list.component.html',
  styleUrls: ['./admin-users--list.component.css']
})
export class AdminUsersListComponent implements OnInit {
  users; apiString;
  clients; mechanics; managers; admins; unasigned;
  ncl; nm; nmg; na; nu;

  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
    this.getUsersData()

  }

  getUsersData(){
    //Client data
    this.api.getAllUsers(1)
    .subscribe((response) => { this.clients = response},
    (error) => {let apiString = error});
    this.api.getUserCount(1).subscribe((res) => { this.ncl = res})
    //Mechanics data
    this.api.getAllUsers(2)
    .subscribe((response) => { this.mechanics = response},
    (error) => {let apiString = error});
    this.api.getUserCount(2).subscribe((res) => { this.nm = res})
    //Managers data
    this.api.getAllUsers(3)
    .subscribe((response) => { this.managers = response},
    (error) => {let apiString = error});
    this.api.getUserCount(3).subscribe((res) => { this.nmg = res})
    //Admin data
    this.api.getAllUsers(4)
    .subscribe((response) => { this.admins = response},
    (error) => {let apiString = error});
    this.api.getUserCount(4).subscribe((res) => { this.na = res})
    //Unasigned users data
    this.api.getAllUsers(0)
    .subscribe((response) => { this.unasigned = response},
    (error) => {let apiString = error});
    this.api.getUserCount(0).subscribe((res) => { this.nu = res})
  }

  userView(id: number){
    this.api.setCurrentUser(id);
  }
}
