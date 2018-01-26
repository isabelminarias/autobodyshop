import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSystemWaitingListComponent } from './manager-system--waiting-list.component';

describe('ManagerSystemWaitingListComponent', () => {
  let component: ManagerSystemWaitingListComponent;
  let fixture: ComponentFixture<ManagerSystemWaitingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSystemWaitingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSystemWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
