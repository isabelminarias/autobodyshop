import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCarViewComponent } from './manager-car--view.component';

describe('ManagerCarViewComponent', () => {
  let component: ManagerCarViewComponent;
  let fixture: ComponentFixture<ManagerCarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerCarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
