import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrevistasRoutingModule } from './entrevistas-routing.module';
import { EntrevistasComponent } from './entrevistas.component';
import { FormularioEntrevistaComponent } from './formulario-entrevista/formulario-entrevista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoEntrevistasComponent } from './listado-entrevistas/listado-entrevistas.component';


@NgModule({
  declarations: [
    EntrevistasComponent,
    FormularioEntrevistaComponent,
    ListadoEntrevistasComponent
  ],
  imports: [
    CommonModule,
    EntrevistasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntrevistasModule { }
