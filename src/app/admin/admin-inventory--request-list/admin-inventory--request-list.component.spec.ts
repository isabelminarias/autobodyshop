import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryRequestListComponent } from './admin-inventory--request-list.component';

describe('AdminInventoryRequestListComponent', () => {
  let component: AdminInventoryRequestListComponent;
  let fixture: ComponentFixture<AdminInventoryRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInventoryRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventoryRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
