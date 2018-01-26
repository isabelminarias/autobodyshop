import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterEmployeeComponent } from './login-register--employee.component';

describe('LoginRegisterEmployeeComponent', () => {
  let component: LoginRegisterEmployeeComponent;
  let fixture: ComponentFixture<LoginRegisterEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
