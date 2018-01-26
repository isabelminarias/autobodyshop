import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRepairAcceptComponent } from './manager-repair--accept.component';

describe('ManagerRepairAcceptComponent', () => {
  let component: ManagerRepairAcceptComponent;
  let fixture: ComponentFixture<ManagerRepairAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRepairAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRepairAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
