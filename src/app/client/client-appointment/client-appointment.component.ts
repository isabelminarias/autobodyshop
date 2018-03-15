import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-appointment',
  templateUrl: './client-appointment.component.html',
  styleUrls: ['./client-appointment.component.css']
})
export class ClientAppointmentComponent implements OnInit {
  services = ['Oil check; ', 'Tire pressure; ', 'AC Check; ', 
  'Suspension Check; ', 'Wheel Alignment; ', 'Common maintenance (General); ', 
  'Engine tuning; ', 'Other; ']
  constructor() { }
  
  ngOnInit() {
  }

}
