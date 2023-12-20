import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosRoutingModule } from './puestos-routing.module';
import { PuestosComponent } from './puestos.component';
import { FormularioPuestoComponent } from './formulario-puesto/formulario-puesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoPuestosComponent } from './listado-puestos/listado-puestos.component';
import { EstadisticaPuestoComponent } from './estadistica-puesto/estadistica-puesto.component';


@NgModule({
  declarations: [
    PuestosComponent,
    FormularioPuestoComponent,
    ListadoPuestosComponent,
    EstadisticaPuestoComponent
  ],
  imports: [
    CommonModule,
    PuestosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PuestosModule { }
