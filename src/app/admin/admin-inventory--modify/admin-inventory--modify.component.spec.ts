import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryModifyComponent } from './admin-inventory--modify.component';

describe('AdminInventoryModifyComponent', () => {
  let component: AdminInventoryModifyComponent;
  let fixture: ComponentFixture<AdminInventoryModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInventoryModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventoryModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
