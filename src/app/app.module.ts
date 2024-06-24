import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { SidenavComponent } from './bodecash/sidenav/sidenav.component';
import { SublevelMenuComponent } from './bodecash/sidenav/sublevel-menu.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './bodecash/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtModuleOptions } from '@auth0/angular-jwt';
import { RegisterComponent } from './auth/register/register.component';
import { ClienteCrearComponent } from './bodecash/component/cliente/cliente-crear/cliente-crear.component';
import { ClienteListarComponent } from './bodecash/component/cliente/cliente-listar/cliente-listar.component';
import { TipoProductoListarComponent } from './bodecash/component/tipo-de-producto/tipo-producto-listar/tipo-producto-listar.component';
import { ProductoListarComponent } from './bodecash/component/producto/producto-listar/producto-listar.component';
import { TipoProductoCrearComponent } from './bodecash/component/tipo-de-producto/tipo-producto-crear/tipo-producto-crear.component';
import { ProductoCrearComponent } from './bodecash/component/producto/producto-crear/producto-crear.component';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    allowedDomains: ['localhost:8080'],
    disallowedRoutes: [
      'http://localhost:8080/auth/register',
      'http://localhost:8080/auth/buscar-por-username/{username}',
      'http://localhost:8080/auth/users',
    ],
  },
};

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelMenuComponent,
    BodyComponent,
    RegisterComponent,
    ClienteCrearComponent,
    ClienteListarComponent,
    TipoProductoListarComponent,
    TipoProductoCrearComponent,
    ProductoListarComponent,
    ProductoCrearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot(jwtModuleOptions)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
