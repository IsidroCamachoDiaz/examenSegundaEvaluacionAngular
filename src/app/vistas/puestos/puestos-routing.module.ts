import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuestosComponent } from './puestos.component';
import { formatCurrency } from '@angular/common';
import { FormularioPuestoComponent } from './formulario-puesto/formulario-puesto.component';
import { ListadoPuestosComponent } from './listado-puestos/listado-puestos.component';
import { EstadisticaPuestoComponent } from './estadistica-puesto/estadistica-puesto.component';

//Este modulo sirve para controlar los puestos de trabajo
const routes: Routes = [{ path: '', component: PuestosComponent ,children:[
  {path:"crear",component:FormularioPuestoComponent,},
  {path:"modificar/:id",component:FormularioPuestoComponent},
  {path:"listar",component:ListadoPuestosComponent},
  {path:"estadisticas",component:EstadisticaPuestoComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestosRoutingModule { }
