import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'actualizar',
    component: ActualizarComponent
  },
  {
    path: 'nuevo',
    component: NuevoComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionesRoutingModule { }
