import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Car } from '../../services/car/car';
import { DatePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { QuestionableBooleanPipe } from '../../services/questionable-boolean.pipe';

@Component({
  selector: 'app-client-car--view',
  templateUrl: './client-car--view.component.html',
  styleUrls: ['./client-car--view.component.css']
})
export class ClientCarViewComponent implements OnInit {
  errMsg; car; user;
  constructor(private api: CarService) { }

  ngOnInit() {
    this.getCarData(4)
  }

  getCarData(id:number){
    this.api.getCarById(4).subscribe(
     (response) => {
      this.car = response
     },
     (error) => {
       this.errMsg = error
     }
    )
    this.api.getClientByCar(4).subscribe(
      (res) => {
        this.user = res
      },
      (error) => {
        this.errMsg = error
      }
    )
  }
  
}
