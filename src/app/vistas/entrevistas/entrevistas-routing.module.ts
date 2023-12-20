import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasComponent } from './entrevistas.component';
import { FormularioEntrevistaComponent } from './formulario-entrevista/formulario-entrevista.component';
import { ListadoEntrevistasComponent } from './listado-entrevistas/listado-entrevistas.component';

//Modulo que controla las entrevistas de los candidatos
const routes: Routes = [{ path: '', component: EntrevistasComponent ,children:[
  {path:"crear",component:FormularioEntrevistaComponent},
  {path:"modificar/:id",component:FormularioEntrevistaComponent},
  {path:"listar",component:ListadoEntrevistasComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrevistasRoutingModule { }
