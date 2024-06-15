import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { MisCreditosComponent } from './mis-creditos/mis-creditos.component';
import { HistorialRoutingModule } from './historial-routing.module';

@NgModule({
    declarations: [
        HistorialComponent,
        MisComprasComponent,
        MisCreditosComponent
    ],
    imports: [
      CommonModule,
      HistorialRoutingModule
    ]
  })
  export class HistorialModule { }