import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarModifyComponent } from './client-car--modify.component';

describe('ClientCarModifyComponent', () => {
  let component: ClientCarModifyComponent;
  let fixture: ComponentFixture<ClientCarModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCarModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCarModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
