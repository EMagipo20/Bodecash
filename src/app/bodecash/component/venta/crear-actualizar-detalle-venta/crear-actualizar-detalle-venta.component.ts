import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../../../../models/producto';
import { Cliente } from '../../../../models/cliente';
import { DetalleVentaService } from '../../../../services/detalle-venta.service';
import { ProductoService } from '../../../../services/producto.service';
import { ClienteService } from '../../../../services/cliente.service';
import { Router } from '@angular/router';
import { DetalleVenta } from '../../../../models/detalleVenta';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-actualizar-detalle-venta',
  templateUrl: './crear-actualizar-detalle-venta.component.html',
  styleUrls: ['./crear-actualizar-detalle-venta.component.scss']
})
export class CrearActualizarDetalleVentaComponent implements OnInit {
  detalleVentaForm: FormGroup;
  productos: Producto[] = [];
  clientes: Cliente[] = [];
  precioUnitario: number = 0;

  constructor(
    private fb: FormBuilder,
    private detalleVentaService: DetalleVentaService,
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.detalleVentaForm = this.fb.group({
      cantidad: [0, [Validators.required, Validators.min(1)]],
      precio: [{ value: 0, disabled: true }, Validators.required],
      fechaVenta: [new Date(), Validators.required],
      idProducto: [null, Validators.required],
      idCliente: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarClientes();

    // Escuchar cambios en idProducto y actualizar el precio unitario
    this.detalleVentaForm.get('idProducto')?.valueChanges.subscribe((productId) => {
      const selectedProduct = this.productos.find((p) => p.id === productId);
      if (selectedProduct) {
        this.precioUnitario = selectedProduct.precio; // Guardar el precio unitario
        this.actualizarPrecioTotal();
      } else {
        this.precioUnitario = 0;
        this.detalleVentaForm.patchValue({ precio: 0 });
      }
    });

    // Escuchar cambios en cantidad y actualizar el precio total
    this.detalleVentaForm.get('cantidad')?.valueChanges.subscribe(() => {
      this.actualizarPrecioTotal();
    });
  }

  cargarProductos(): void {
    this.productoService.listarTodosLosProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      () => {
        this.snackBar.open('Error al cargar los productos', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  cargarClientes(): void {
    this.clienteService.listarTodosLosClientes().subscribe(
      (data: Cliente[]) => {
        this.clientes = data;
      },
      () => {
        this.snackBar.open('Error al cargar los clientes', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  actualizarPrecioTotal(): void {
    const cantidad = this.detalleVentaForm.get('cantidad')?.value || 0;
    const precioTotal = this.precioUnitario * cantidad;
    this.detalleVentaForm.patchValue({ precio: precioTotal });
  }

  registrarDetalleVenta(): void {
    if (this.detalleVentaForm.valid) {
      const detalleVenta: DetalleVenta = this.detalleVentaForm.getRawValue();
      detalleVenta.fechaVenta = new Date(this.detalleVentaForm.value.fechaVenta);

      this.detalleVentaService.registrarDetalleVenta(detalleVenta).subscribe(
        () => {
          this.snackBar.open('Detalle de venta registrado con éxito', 'Cerrar', {
            duration: 3000,
          });
          this.router.navigate(['/detalle-ventas']);
        },
        (error) => {
          this.snackBar.open('Error al registrar el detalle de venta', 'Cerrar', {
            duration: 3000,
          });
          console.error('Error:', error);
        }
      );
    } else {
      this.snackBar.open('Por favor, complete todos los campos correctamente', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}

