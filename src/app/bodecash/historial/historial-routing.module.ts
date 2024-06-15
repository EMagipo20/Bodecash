import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { MisCreditosComponent } from './mis-creditos/mis-creditos.component';

const routes: Routes = [
  {
    path: 'mis-compras',
    component: MisComprasComponent
  },
  {
    path: 'mis-creditos',
    component: MisCreditosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }