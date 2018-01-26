import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileModifyComponent } from './admin-profile--modify.component';

describe('AdminProfileModifyComponent', () => {
  let component: AdminProfileModifyComponent;
  let fixture: ComponentFixture<AdminProfileModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
