import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { carDetails } from './carDetails';
import { Users } from '../api/users';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }
  ownerLink = 'http://localhost:3000/api/car/owner/'
  carLink = 'http://localhost:3000/api/car/details/'

  getCarsByClient(id: number){
    return this.http.get<Car>(this.ownerLink.concat(id.toString()))
  }

  getCarById(id:number){
    return this.http.get<Car>(this.carLink.concat(id.toString()))
  }
  
  getClientByCar(id:number){
    return this.http.get<Users>('http://localhost:3000/api/car/client/'.concat(id.toString()))
  }
  getCarByPlate(plate:number){

  }
  
}
