import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.scss']
})
export class ProductoListarComponent implements OnInit {
  productos: Producto[] = [];
  displayedColumns: string[] = ['idProducto', 'nombreProducto', 'detalleProducto', 'precio', 'stock', 'tipoProducto', 'acciones'];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoService.listarTodosLosProductos().subscribe(
      (data) => this.productos = data,
      (error) => console.error(error)
    );
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro que quieres eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe(
        () => this.listarProductos(),
        (error) => console.error(error)
      );
    }
  }
}
