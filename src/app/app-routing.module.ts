import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pacientes',
    // children: [
    //   {component, path, children: []}
    // ],
    loadChildren: () => import('./paciente/paciente.module')
      .then(mod => mod.PacienteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
