import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Cliente } from '../../../../models/cliente';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-cliente-crear',
  templateUrl:'./cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.scss']
})
export class ClienteCrearComponent {
  clienteForm: FormGroup = new FormGroup({});
  Cliente: Cliente = new Cliente;
  username: string;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar
  ) {
    this.username = '';
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

  submitForm(): void {
    if (this.clienteForm.invalid) {
      return;
    }

    const cliente: Cliente = {
      ...this.clienteForm.value,
      idUsuario: this.username // Ajusta el valor correcto para el nombre de usuario
    };

    this.clienteService.registrarCliente(cliente).subscribe(
      () => {
        this.showSuccessMessage('✔ Cliente registrado correctamente');
        this.clienteForm.reset(); // Reinicia el formulario después de registrar correctamente
      },
      error => {
        this.showErrorMessage('✘ Error al registrar cliente');
      }
    );
  }

  actualizarCliente(): void {
    if (this.clienteForm.invalid) {
      return;
    }

    const cliente: Cliente = {
      ...this.clienteForm.value,
      idUsuario: this.username
    };

    this.clienteService.actualizarCliente(cliente.id, cliente).subscribe(
      () => {
        this.showSuccessMessage('✔ Cliente actualizado correctamente');
        this.clienteForm.reset();
      },
      error => {
        this.showErrorMessage('✘ Error al actualizar cliente');
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

  private showErrorMessage(message: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['snack-bar-error']
    };
    this.snackBar.open(message, 'Cerrar', config);
  }
}