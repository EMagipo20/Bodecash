import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './bodecash/dashboard/dashboard.component';
import { segGuard } from './guards/seguridad.guard';
import { SidenavComponent } from './bodecash/sidenav/sidenav.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sidenav', component: SidenavComponent },

  //Rutas de Bodecash
  {
    path: 'dashborad', component: DashboardComponent
  },
  {
    path: 'gestiones',
    loadChildren: () => import('./bodecash/gestiones/gestiones.module').then(m => m.GestionesModule), canActivate: [segGuard], 
  },
  {
    path: 'bodega',
    loadChildren: () => import('./bodecash/bodega/bodega.module').then(m => m.BodegaModule), canActivate: [segGuard], 
  },
  {
    path: 'creditos',
    loadChildren: () => import('./bodecash/creditos/creditos.module').then(m => m.CreditosModule), canActivate: [segGuard], 
  },
  {
    path: 'historial',
    loadChildren: () => import('./bodecash/historial/historial.module').then(m => m.HistorialModule), canActivate: [segGuard], 
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./bodecash/configuracion/configuracion.module').then(m => m.ConfiguracionModule), canActivate: [segGuard], 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
