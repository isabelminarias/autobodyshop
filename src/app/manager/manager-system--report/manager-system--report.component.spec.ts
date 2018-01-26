import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSystemReportComponent } from './manager-system--report.component';

describe('ManagerSystemReportComponent', () => {
  let component: ManagerSystemReportComponent;
  let fixture: ComponentFixture<ManagerSystemReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSystemReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSystemReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
