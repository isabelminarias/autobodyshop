import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarViewComponent } from './client-car--view.component';

describe('ClientCarViewComponent', () => {
  let component: ClientCarViewComponent;
  let fixture: ComponentFixture<ClientCarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
