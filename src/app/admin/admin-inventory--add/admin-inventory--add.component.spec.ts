import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryAddComponent } from './admin-inventory--add.component';

describe('AdminInventoryAddComponent', () => {
  let component: AdminInventoryAddComponent;
  let fixture: ComponentFixture<AdminInventoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInventoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
