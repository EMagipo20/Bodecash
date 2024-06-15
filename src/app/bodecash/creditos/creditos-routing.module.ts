import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarCreditoComponent } from './asignar-credito/asignar-credito.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';

const routes: Routes = [
  {
    path: 'asignar-credito',
    component: AsignarCreditoComponent
  },
  {
    path: 'nueva-compra',
    component: NuevaCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditosRoutingModule { }