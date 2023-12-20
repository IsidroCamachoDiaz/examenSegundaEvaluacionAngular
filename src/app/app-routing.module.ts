import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'puestos', loadChildren: () => import('./vistas/puestos/puestos.module').then(m => m.PuestosModule) }, { path: 'candidatos', loadChildren: () => import('./vistas/candidatos/candidatos.module').then(m => m.CandidatosModule) }, { path: 'entrevistas', loadChildren: () => import('./vistas/entrevistas/entrevistas.module').then(m => m.EntrevistasModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
