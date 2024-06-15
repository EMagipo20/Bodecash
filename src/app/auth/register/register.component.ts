import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public usuarioForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required]
    });
  }

  registrarUsuario() {
    if (this.usuarioForm.valid) {
      const newUser: Usuario = this.usuarioForm.value;
      this.usuarioService.crear(newUser).subscribe({
        next: (data) => {
          this.snackBar.open('Usuario creado con éxito.', 'Cerrar', { duration: 3000 });
          this.usuarioForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          this.snackBar.open(`Error: ${err}`, 'Cerrar', { duration: 3000 });
          this.router.navigate(['register']);
        }
      });
    }
  }
}
