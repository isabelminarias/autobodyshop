import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersModifyComponent } from './admin-users--modify.component';

describe('AdminUsersModifyComponent', () => {
  let component: AdminUsersModifyComponent;
  let fixture: ComponentFixture<AdminUsersModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
