import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BodeCash';

  role: string = '';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private loginService: AuthService, private router: Router) {}

  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  isUser() {
    return this.role === 'USER';
  }
}
