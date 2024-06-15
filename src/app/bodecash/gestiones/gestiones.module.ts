import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionesRoutingModule } from './gestiones-routing.module';
import { GestionesComponent } from './gestiones.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    GestionesComponent,
    NuevoComponent,
    ActualizarComponent,
    ListarComponent,
  ],
  imports: [
    CommonModule,
    GestionesRoutingModule,
    AngularMaterialModule
  ]
})
export class GestionesModule { }
