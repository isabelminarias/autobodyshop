import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileModifyComponent } from './client-profile--modify.component';

describe('ClientProfileModifyComponent', () => {
  let component: ClientProfileModifyComponent;
  let fixture: ComponentFixture<ClientProfileModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfileModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
