import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicSparePartsRequestComponent } from './mechanic-spare-parts--request.component';

describe('MechanicSparePartsRequestComponent', () => {
  let component: MechanicSparePartsRequestComponent;
  let fixture: ComponentFixture<MechanicSparePartsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicSparePartsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicSparePartsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
