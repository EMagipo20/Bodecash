import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { TipoProducto } from '../../../../models/TipoProducto';
import { ProductoService } from '../../../../services/producto.service';
import { TipoProductoService } from '../../../../services/tipoproducto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-producto-crear',
  templateUrl:'./producto-crear.component.html',
  styleUrls: ['./producto-crear.component.scss']
})
export class ProductoCrearComponent implements OnInit {
  productoForm: FormGroup = new FormGroup({});
  producto: Producto = new Producto();
  tiposProducto: TipoProducto[] = [];

  constructor(
    private productoService: ProductoService,
    private tipoProductoService: TipoProductoService,
    private snackbar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.productoForm = this.fb.group({
      nombreProducto: ['', [Validators.required, Validators.minLength(3)]],
      detalleProducto: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      tipoProducto: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.tipoProductoService.listarTodosLosTipoProductos().subscribe(
      (tipos) => {
        this.tiposProducto = tipos;
      },
      (error) => {
        this.snackbar.open('Error al cargar tipos de productos', 'Cerrar', { duration: 3000 });
      }
    );
  }

  crearProducto() {
    if (this.productoForm.invalid) {
      this.snackbar.open('Por favor complete el formulario correctamente', 'Cerrar', { duration: 3000 });
      return;
    }
  
    // Asignar los valores del formulario al objeto producto
    this.producto.nombreProducto = this.productoForm.value.nombreProducto;
    this.producto.detalleProducto = this.productoForm.value.detalleProducto;
    this.producto.precio = this.productoForm.value.precio;
    this.producto.stock = this.productoForm.value.stock;
    this.producto.idtipoProducto = this.productoForm.value.tipoProducto;
  
    this.productoService.registrarProducto(this.producto).subscribe(
      () => {
        this.snackbar.open('Producto creado correctamente', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/productos']);
      },
      (error) => {
        this.snackbar.open('Error al crear producto', 'Cerrar', { duration: 3000 });
      }
    );
  }  
}