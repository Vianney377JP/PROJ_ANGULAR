import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PacienteRoutingModule} from './paciente-routing.module';
import {SharedModule} from '../shared/shared.module';
import { EditarComponent } from '../paciente/components/editar/editar.component';
import { DiretivaExemploComponent } from '../paciente/components/diretiva-exemplo/diretiva-exemplo.component';
import { PipeExemploComponent } from './components/pipe-exemplo/pipe-exemplo.component';
import { NgContentComponetComponent } from './components/ng-content-componet/ng-content-componet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent,
    DiretivaExemploComponent,
    PipeExemploComponent,
    NgContentComponetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PacienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
   
  ]
})
export class PacienteModule { }
