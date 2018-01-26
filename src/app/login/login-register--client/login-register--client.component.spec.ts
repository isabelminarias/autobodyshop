import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterClientComponent } from './login-register--client.component';

describe('LoginRegisterClientComponent', () => {
  let component: LoginRegisterClientComponent;
  let fixture: ComponentFixture<LoginRegisterClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
