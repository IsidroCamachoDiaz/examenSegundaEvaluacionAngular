import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosComponent } from './candidatos.component';
import { FormularioCandidatoComponent } from './formulario-candidato/formulario-candidato.component';
import { ListadoCandidatosComponent } from './listado-candidatos/listado-candidatos.component';

//Este modulo controla los candidatos
const routes: Routes = [{ path: '', component: CandidatosComponent ,children:[
  {path:"crear",component:FormularioCandidatoComponent},
  {path:"modificar/:id",component:FormularioCandidatoComponent},
  {path:"listar",component:ListadoCandidatosComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
