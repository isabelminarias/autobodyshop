import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRepairCheckinComponent } from './manager-repair--checkin.component';

describe('ManagerRepairCheckinComponent', () => {
  let component: ManagerRepairCheckinComponent;
  let fixture: ComponentFixture<ManagerRepairCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRepairCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRepairCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
