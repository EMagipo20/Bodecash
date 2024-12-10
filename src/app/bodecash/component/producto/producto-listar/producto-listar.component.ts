import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { Producto } from '../../../../models/producto';
import { TipoProductoService } from '../../../../services/tipoproducto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.scss']
})
export class ProductoListarComponent implements OnInit {
  productos: Producto[] = [];
  tiposProducto: Map<number, string> = new Map();
  displayedColumns: string[] = ['idProducto', 'nombreProducto', 'detalleProducto', 'precio', 'stock', 'tipoProducto', 'acciones'];

  constructor(
    private productoService: ProductoService,
    private tipoProductoService: TipoProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarProductos();
    this.listarTiposProducto();
  }

  listarProductos(): void {
    this.productoService.listarTodosLosProductos().subscribe(
      (data) => this.productos = data,
      (error) => console.error(error)
    );
  }

  listarTiposProducto(): void {
    this.tipoProductoService.listarTodosLosTipoProductos().subscribe(
      (data) => {
        data.forEach(tipo => this.tiposProducto.set(tipo.id, tipo.descripcion));
      },
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

  getTipoProductoDescripcion(id: number): string {
    return this.tiposProducto.get(id) || '';
  }
}
