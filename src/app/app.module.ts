import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { SidenavComponent } from './bodecash/sidenav/sidenav.component';
import { SublevelMenuComponent } from './bodecash/sidenav/sublevel-menu.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './bodecash/body/body.component';
import { DashboardComponent } from './bodecash/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { RegisterComponent } from './auth/register/register.component';
import { ClienteCrearComponent } from './bodecash/component/cliente/cliente-crear/cliente-crear.component';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelMenuComponent,
    BodyComponent,
    DashboardComponent,
    RegisterComponent,
    ClienteCrearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: [
          'http://localhost:8080/auth/register',
          'http://localhost:8080/auth/buscar-por-username/{username}',
        ],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
