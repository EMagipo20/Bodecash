import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth.service';
import { ClienteService } from '../../../../services/cliente.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { Cliente } from '../../../../models/cliente';

@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.scss']
})
export class ClienteCrearComponent implements OnInit {
  clienteForm: FormGroup = new FormGroup({});
  username: string = '';

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private router: Router
  ) { this.username = this.authService.getUsername() || '';}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numeroDocumento: ['', Validators.required],
      limiteCredito: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(9)]],
      direccion: ['', Validators.required],
      idUsuario: ['']
    });
  }

  continuar(): void {
    if (this.clienteForm.invalid) {
      return;
    }

    sessionStorage.setItem('profileCompleted', 'true');

    this.usuarioService.listarTodos().subscribe(
      usuarios => {
        const usuario = usuarios.find(u => u.username === this.username);
        if (!usuario) {
          return;
        }

        const cliente: Cliente = {
          ...this.clienteForm.value,
          usuarioId: usuario.id
        };

        this.clienteService.registrarCliente(cliente).subscribe(
          () => {
            this.showSuccessMessage('✔ Gracias por brindarnos tu información');
          }
        );
      }
    );
  }

  private showSuccessMessage(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['snack-bar-success']
    };
    this.snackBar.open(message, 'Cerrar', config);
  }
}
