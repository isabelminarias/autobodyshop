import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCarListComponent } from './manager-car--list.component';

describe('ManagerCarListComponent', () => {
  let component: ManagerCarListComponent;
  let fixture: ComponentFixture<ManagerCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
