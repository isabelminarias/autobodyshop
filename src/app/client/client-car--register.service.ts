import { Injectable } from '@angular/core';

@Injectable()
export class ClientCarRegisterService {

  constructor( public http: HttpClient ) { }


  GetCampos(){
  return this.http.get('api').toPromise();

  }
}
