import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguraciónRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './configuracion.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';

@NgModule({
    declarations: [
        ConfiguracionComponent,
        MiPerfilComponent
    ],
    imports: [
      CommonModule,
      ConfiguraciónRoutingModule
    ]
  })
  export class ConfiguracionModule { }