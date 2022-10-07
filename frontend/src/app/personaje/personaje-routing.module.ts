import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {path : '', component : ListaComponent},
  {path : ':id/detalle', component : DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeRoutingModule { }
