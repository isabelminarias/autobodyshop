import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicSparePartsListComponent } from './mechanic-spare-parts--list.component';

describe('MechanicSparePartsListComponent', () => {
  let component: MechanicSparePartsListComponent;
  let fixture: ComponentFixture<MechanicSparePartsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicSparePartsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicSparePartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
