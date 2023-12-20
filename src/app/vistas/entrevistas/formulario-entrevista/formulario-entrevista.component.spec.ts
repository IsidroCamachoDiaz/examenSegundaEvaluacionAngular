import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntrevistaComponent } from './formulario-entrevista.component';

describe('FormularioEntrevistaComponent', () => {
  let component: FormularioEntrevistaComponent;
  let fixture: ComponentFixture<FormularioEntrevistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEntrevistaComponent]
    });
    fixture = TestBed.createComponent(FormularioEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
