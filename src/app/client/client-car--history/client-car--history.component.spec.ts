import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarHistoryComponent } from './client-car--history.component';

describe('ClientCarHistoryComponent', () => {
  let component: ClientCarHistoryComponent;
  let fixture: ComponentFixture<ClientCarHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCarHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCarHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
