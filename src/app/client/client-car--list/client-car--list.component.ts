import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Car } from '../../services/car/car';
import { DatePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-client-car--list',
  templateUrl: './client-car--list.component.html',
  styleUrls: ['./client-car--list.component.css']
})
export class ClientCarListComponent implements OnInit {
  errorMsg; carList; cars;
  constructor(private http: HttpClient, private api: CarService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.carList = this.api.getCarsByClient(3);
    this.carList.subscribe(
      (response)=> {
        this.cars = response
      },
      (error) => {
        this.errorMsg = error
      }
    )
  }

  appointment(id: number){
    this.errorMsg = id.toString()
  }
  
}
