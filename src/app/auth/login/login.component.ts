import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JwtRequest } from '../../models/jwtRequest';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensaje: string = '';
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  login(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      () => {
        console.log('Login successful');
        const token = this.authService.getToken();
        console.log('Token:', token);
        this.router.navigate(['sidenav'])
      },
      (error) => {
        this.mensaje = 'Credenciales incorrectas!!';
        this.snackBar.open(this.mensaje, 'Aviso', { duration: 2000 });
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
