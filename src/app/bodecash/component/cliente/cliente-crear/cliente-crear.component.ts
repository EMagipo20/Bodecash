import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Cliente } from '../../../../models/cliente';
import { ClienteService } from '../../../../services/cliente.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.scss']
})
export class ClienteCrearComponent {
  clienteForm: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  username: string;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.username = this.authService.getUsername() || ''; 
  }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numeroDocumento: ['', Validators.required],
      limiteCredito: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(9)]],
      direccion: ['', Validators.required]
    });
  }

  Registrar(): void {
    if (this.clienteForm.invalid) {
      return;
    }

    this.usuarioService.listarTodos().subscribe(users => {
      const user = users.find(u => u.username === this.username);
      if (!user) {
        this.showErrorMessage('Usuario no encontrado');
        return;
      }

      this.cliente = {
        ...this.clienteForm.value,
        idUsuario: user.id
      };

      this.clienteService.registrarCliente(this.cliente).subscribe(
        () => {
          this.showSuccessMessage('Cliente registrado correctamente');
          this.router.navigate(['/cliente-listar']);
        },
        error => {
          this.showErrorMessage('Error al registrar cliente');
        }
      );
    });
  }

  private showSuccessMessage(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['snack-bar-success']
    };
    this.snackBar.open(message, 'Cerrar', config);
  }

  private showErrorMessage(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['snack-bar-error']
    };
    this.snackBar.open(message, 'Cerrar', config);
  }
}
