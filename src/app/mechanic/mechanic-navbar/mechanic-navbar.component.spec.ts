import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicNavbarComponent } from './mechanic-navbar.component';

describe('MechanicNavbarComponent', () => {
  let component: MechanicNavbarComponent;
  let fixture: ComponentFixture<MechanicNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
