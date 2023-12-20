import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPuestosComponent } from './listado-puestos.component';

describe('ListadoPuestosComponent', () => {
  let component: ListadoPuestosComponent;
  let fixture: ComponentFixture<ListadoPuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPuestosComponent]
    });
    fixture = TestBed.createComponent(ListadoPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
