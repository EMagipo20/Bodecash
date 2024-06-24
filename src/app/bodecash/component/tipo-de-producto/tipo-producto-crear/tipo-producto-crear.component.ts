import { Component } from '@angular/core';
import { TipoProducto } from '../../../../models/TipoProducto';
import { TipoProductoService } from '../../../../services/tipoproducto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-producto-crear',
  templateUrl: './tipo-producto-crear.component.html',
  styleUrls: ['./tipo-producto-crear.component.scss']
})
export class TipoProductoCrearComponent {
  tipoProducto: TipoProducto = new TipoProducto();
  tipoProductoForm: FormGroup = new FormGroup({});

  constructor(
    private tipoProductoService: TipoProductoService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) { this.tipoProductoForm = this.fb.group({
      descripcion: ['', [Validators.required, Validators.minLength(3)]]
    }); 
  }

  crearTipoProducto() {
    if (this.tipoProductoForm.invalid) {
      this.snackBar.open('Por favor complete el formulario correctamente', 'Cerrar', { duration: 3000 });
      return;
    }

    this.tipoProducto.descripcion = this.tipoProductoForm.value.descripcion;
    this.tipoProductoService.registrarTipoProducto(this.tipoProducto).subscribe(
      () => {
        this.snackBar.open('Tipo de producto creado correctamente', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/producto-listar']);
      },
      (error) => {
        this.snackBar.open('Error al crear producto', 'Cerrar', { duration: 3000 });
      }
    );
  }
}
