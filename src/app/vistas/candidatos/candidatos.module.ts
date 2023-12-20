import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosComponent } from './candidatos.component';
import { FormularioCandidatoComponent } from './formulario-candidato/formulario-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoCandidatosComponent } from './listado-candidatos/listado-candidatos.component';


@NgModule({
  declarations: [
    CandidatosComponent,
    FormularioCandidatoComponent,
    ListadoCandidatosComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CandidatosModule { }
