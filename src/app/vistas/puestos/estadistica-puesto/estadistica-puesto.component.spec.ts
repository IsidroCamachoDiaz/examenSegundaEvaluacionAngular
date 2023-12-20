import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaPuestoComponent } from './estadistica-puesto.component';

describe('EstadisticaPuestoComponent', () => {
  let component: EstadisticaPuestoComponent;
  let fixture: ComponentFixture<EstadisticaPuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadisticaPuestoComponent]
    });
    fixture = TestBed.createComponent(EstadisticaPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
