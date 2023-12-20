import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCandidatosComponent } from './listado-candidatos.component';

describe('ListadoCandidatosComponent', () => {
  let component: ListadoCandidatosComponent;
  let fixture: ComponentFixture<ListadoCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCandidatosComponent]
    });
    fixture = TestBed.createComponent(ListadoCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
