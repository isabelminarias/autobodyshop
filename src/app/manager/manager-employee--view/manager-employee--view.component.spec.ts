import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEmployeeViewComponent } from './manager-employee--view.component';

describe('ManagerEmployeeViewComponent', () => {
  let component: ManagerEmployeeViewComponent;
  let fixture: ComponentFixture<ManagerEmployeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerEmployeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
