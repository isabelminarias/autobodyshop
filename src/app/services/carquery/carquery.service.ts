import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarqueryService {
  private _url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=&sold_in_us=0';
  private makes_url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=';
  private soldUSNo: '&sold_in_us=0';
  constructor(private http: HttpClient) { }

  getMakes(year): Observable<Car[]> {
    const _url = this.makes_url.concat(year).concat(this.soldUSNo);
    return this.http.get<Car[]>(this._url);
  }
}
