import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppointmentListComponent } from './client-appointment--list.component';

describe('ClientAppointmentListComponent', () => {
  let component: ClientAppointmentListComponent;
  let fixture: ComponentFixture<ClientAppointmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAppointmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
