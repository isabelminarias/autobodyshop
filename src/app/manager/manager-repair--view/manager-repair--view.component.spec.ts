import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRepairViewComponent } from './manager-repair--view.component';

describe('ManagerRepairViewComponent', () => {
  let component: ManagerRepairViewComponent;
  let fixture: ComponentFixture<ManagerRepairViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRepairViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRepairViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
