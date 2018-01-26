import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarRegisterComponent } from './client-car--register.component';

describe('ClientCarRegisterComponent', () => {
  let component: ClientCarRegisterComponent;
  let fixture: ComponentFixture<ClientCarRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCarRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
