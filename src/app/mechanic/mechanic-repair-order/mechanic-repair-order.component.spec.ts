import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRepairOrderComponent } from './mechanic-repair-order.component';

describe('MechanicRepairOrderComponent', () => {
  let component: MechanicRepairOrderComponent;
  let fixture: ComponentFixture<MechanicRepairOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicRepairOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicRepairOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
