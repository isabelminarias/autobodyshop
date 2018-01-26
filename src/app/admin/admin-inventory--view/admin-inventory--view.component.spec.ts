import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryViewComponent } from './admin-inventory--view.component';

describe('AdminInventoryViewComponent', () => {
  let component: AdminInventoryViewComponent;
  let fixture: ComponentFixture<AdminInventoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInventoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
