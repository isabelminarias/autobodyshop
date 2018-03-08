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
  clients; mechanics; managers; admins; unasigned

  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
    this.getApiData()
  }

  getApiData(){
    this.api.getApiUsers()
      .subscribe((response) => { this.users = response},
    (error) => {this.apiString = error},
    () => {this.apiString = 'complete'}
    )
    this.api.getAllClients()
      .subscribe((response) => { this.clients = response},
    (error) => {this.apiString = error})
    this.api.getAllMechanics()
      .subscribe((response)=> { this.mechanics = response},
      (error) => {this.apiString = error})
    this.api.getAllManagers()
      .subscribe((response)=> { this.managers = response},
      (error) => {this.apiString = error})
    this.api.getAllAdmins()
      .subscribe((response)=> { this.admins = response},
      (error) => {this.apiString = error})
    this.api.getAllUnasigned()
      .subscribe((response)=> { this.unasigned = response},
      (error) => {this.apiString = error})
  }

}
