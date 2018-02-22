import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../carquery/car';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostCarService {
  private link = 'localhost:3000/api/car/add';
  constructor( private http: HttpClient) { }

  postCar(model: String, make: String, year: Number, usage: Number){

  }
}
