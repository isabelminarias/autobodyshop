import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRepairOrderListComponent } from './mechanic-repair-order--list.component';

describe('MechanicRepairOrderListComponent', () => {
  let component: MechanicRepairOrderListComponent;
  let fixture: ComponentFixture<MechanicRepairOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicRepairOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicRepairOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
