import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    let car: [{make:'make', model:'model', year:'year', id:'ID', createdAt:'dateCreate'}]
  }

}
