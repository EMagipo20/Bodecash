import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './bodecash/dashboard/dashboard.component';
import { segGuard } from './guards/seguridad.guard';
import { SidenavComponent } from './bodecash/sidenav/sidenav.component';
import { ClienteComponent } from './bodecash/component/cliente/cliente.component'; // Importa el componente
import { ReportesComponent } from './bodecash/component/reportes/reportes.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cliente', component: ClienteComponent, canActivate: [segGuard] },
      { path: 'producto', component: ClienteComponent, canActivate: [segGuard] },
      { path: 'tipo_de_producto', component: ClienteComponent, canActivate: [segGuard] },
      { path: 'venta', component: ClienteComponent, canActivate: [segGuard] },
      { path: 'credito', component: ClienteComponent, canActivate: [segGuard] },
      { path: 'reportes', component: ReportesComponent, canActivate: [segGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
