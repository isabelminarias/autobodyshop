import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarqueryService {
  private _url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';
  private years_url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears';
  private makes_url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=';
  private models_url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV';
  private soldUSNo: '&sold_in_us=0';
  
  constructor(private http: HttpClient) { 
  	
  }

  getMakes(year: number) {
    return this.http.get(this.makes_url.concat(year.toString()));
  }
  
  getYears(): Observable<any>{
  	return this.http.get(this.years_url);
  }


  makes() {
    return this.http.get(this.makes_url.concat('1999'));
  }

}
