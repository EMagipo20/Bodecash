import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditosRoutingModule } from './creditos-routing.module';
import { CreditosComponent } from './creditos.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { AsignarCreditoComponent } from './asignar-credito/asignar-credito.component';

@NgModule({
    declarations: [
        CreditosComponent,
        AsignarCreditoComponent,
        NuevaCompraComponent
    ],
    imports: [
      CommonModule,
      CreditosRoutingModule
    ]
  })
  export class CreditosModule { }