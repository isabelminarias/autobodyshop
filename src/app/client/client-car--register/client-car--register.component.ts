import { Component, OnInit } from '@angular/core';
import {Observable} from '../../../../node_modules/rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-car--register',
  templateUrl: './client-car--register.component.html',
  styleUrls: ['./client-car--register.component.css']
})
export class ClientCarRegisterComponent implements OnInit {	
  private years = [1948, 1949,
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000,  2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
  ];
  private makes = [
    'Audi', 'Acura', 'Abarth', 'Alfa-Romeo', 'Aston Martin', 'Austin',
    'Bedford', 'Bentley', 'Bolwell', 'Bufori', 'Buggatti' , 'BMW', 'Buick',
    'Cadillac', 'Caterham', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen',
    'Daewoo', 'Daihatsu', 'Dodge', 'Ferrari',
    'Fiat', 'Ford', 'Geely Wall', 'Hyundai', 'Holden', 'Kia',
    'Hino', 'Hummer',
    'Infiniti', 'Isuzu',
    'Jaguar', 'Land Rover', 'Lexus', 'Lotus',
    'Mazda', 'Mini Cooper', 'Mitsubishi', 'Mercedes-Benz', 'Nissan',
    'Opel', 'Porsche', 'Proton', 'Peugeot',
    'Range Rover', 'Renault',
    'Saab', 'Skoda', 'Ssangyong', 'Subaru', 'Suzuki',
    'Tata', 'Toyota', 'Tesla', 'Volvo', 'Volkswagen'
  ];

  constructor(private http: HttpClient) { }
  private apiURL = 'localhost3000/api/car/add';
  data: any = {};
  ngOnInit() {
  	this.getCars();
  }

  getCars(){
  		this.http.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears')
  		.subscribe((res: string)=>{ 
  		const numerito = JSON.parse(res);
  		console.log(numerito);
  		})
  }

  postCar(){
    console.log('posting car');
  }
}
