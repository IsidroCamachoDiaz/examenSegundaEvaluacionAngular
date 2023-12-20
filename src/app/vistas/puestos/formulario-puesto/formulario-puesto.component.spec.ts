import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPuestoComponent } from './formulario-puesto.component';

describe('FormularioPuestoComponent', () => {
  let component: FormularioPuestoComponent;
  let fixture: ComponentFixture<FormularioPuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPuestoComponent]
    });
    fixture = TestBed.createComponent(FormularioPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
