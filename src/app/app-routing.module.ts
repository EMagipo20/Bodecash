import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { segGuard } from './guards/seguridad.guard';
import { SidenavComponent } from './bodecash/sidenav/sidenav.component';
import { ClienteComponent } from './bodecash/component/cliente/cliente.component';
import { ReportesComponent } from './bodecash/component/reportes/reportes.component';
import { ClienteCrearComponent } from './bodecash/component/cliente/cliente-crear/cliente-crear.component';
import { ClienteListarComponent } from './bodecash/component/cliente/cliente-listar/cliente-listar.component';
import { ProductoCrearComponent } from './bodecash/component/producto/producto-crear/producto-crear.component';
import { ProductoListarComponent } from './bodecash/component/producto/producto-listar/producto-listar.component';
import { TipoProductoCrearComponent } from './bodecash/component/tipo-de-producto/tipo-producto-crear/tipo-producto-crear.component';
import { TipoProductoListarComponent } from './bodecash/component/tipo-de-producto/tipo-producto-listar/tipo-producto-listar.component';
import { CrearActualizarDetalleVentaComponent } from './bodecash/component/venta/crear-actualizar-detalle-venta/crear-actualizar-detalle-venta.component';
import { CrearCreditoComponent } from './bodecash/component/credito/crear-credito/crear-credito.component';
import { ListarCreditosComponent } from './bodecash/component/credito/listar-creditos/listar-creditos.component';
import { ListarDetallesCreditoComponent } from './bodecash/component/credito/listar-detalles-credito/listar-detalles-credito.component';
import { CrearActualizarPagoComponent } from './bodecash/component/reportes/crear-actualizar-pago/crear-actualizar-pago.component';
import { ListarPagosComponent } from './bodecash/component/reportes/listar-pagos/listar-pagos.component';
import { ListarDetallesVentaPorClienteComponent } from './bodecash/component/venta/listar-detalles-venta-por-cliente/listar-detalles-venta-por-cliente.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      { path: 'cliente', component: ClienteComponent,
        children:[
          { path: 'cliente-crear', component: ClienteCrearComponent},
          { path: 'cliente-listar', component: ClienteListarComponent},
         ],
         canActivate: [segGuard]
      },
      { path: 'producto', component: ClienteComponent,
        children:[
          { path: 'producto-crear', component: ProductoCrearComponent},
          { path: 'producto-listar', component: ProductoListarComponent},
         ],
         canActivate: [segGuard]
      },
      { path: 'tipo_de_producto', component: ClienteComponent,
        children:[
          { path: 'tipo-producto-crear', component: TipoProductoCrearComponent},
          { path: 'tipo-producto-listar', component: TipoProductoListarComponent},
         ],
         canActivate: [segGuard]
      },
      { path: 'venta', component: ClienteComponent,
        children: [
          { path: 'crear-actualizar-detalle-venta', component: CrearActualizarDetalleVentaComponent },
          { path: 'listar-detalles-venta', component: ListarDetallesVentaPorClienteComponent },
        ],
        canActivate: [segGuard]
      },
      { path: 'credito', component: ClienteComponent,
        children: [
          { path: 'crear-credito', component: CrearCreditoComponent },
          { path: 'listar-creditos', component: ListarCreditosComponent },
          { path: 'listar-detalles-credito', component: ListarDetallesCreditoComponent },
        ],
        canActivate: [segGuard]
      },
      { path: 'reportes', component: ReportesComponent,
        children: [
          { path: 'crear-actualizar-pago', component: CrearActualizarPagoComponent },
          { path: 'listar-pagos', component: ListarPagosComponent },
        ],
        canActivate: [segGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
