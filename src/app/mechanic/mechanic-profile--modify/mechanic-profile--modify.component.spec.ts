import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicProfileModifyComponent } from './mechanic-profile--modify.component';

describe('MechanicProfileModifyComponent', () => {
  let component: MechanicProfileModifyComponent;
  let fixture: ComponentFixture<MechanicProfileModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicProfileModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicProfileModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
