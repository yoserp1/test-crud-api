import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { PersonajeRoutingModule } from './personaje-routing.module';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PersonajeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class PersonajeModule { }
