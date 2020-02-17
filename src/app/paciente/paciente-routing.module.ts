import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';
import { PacienteResolve } from './service/paciente.resolve';



const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarComponent,
    path: 'novo',
    resolve: {
      paciente: PacienteResolve,
    }
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      paciente: PacienteResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PacienteRoutingModule { }
