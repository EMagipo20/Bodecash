import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodegaRoutingModule } from './bodega-routing.module';
import { BodegaComponent } from './bodega.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
    declarations: [
        BodegaComponent,
        ProductosComponent
    ],
    imports: [
      CommonModule,
      BodegaRoutingModule
    ]
  })
  export class BodegaModule { }