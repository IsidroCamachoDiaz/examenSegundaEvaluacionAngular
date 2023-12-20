import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidatoComponent } from './formulario-candidato.component';

describe('FormularioCandidatoComponent', () => {
  let component: FormularioCandidatoComponent;
  let fixture: ComponentFixture<FormularioCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCandidatoComponent]
    });
    fixture = TestBed.createComponent(FormularioCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
