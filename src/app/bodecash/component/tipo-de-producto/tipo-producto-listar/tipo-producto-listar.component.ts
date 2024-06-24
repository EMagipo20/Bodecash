import { Component, OnInit } from '@angular/core';
import { TipoProductoService } from '../../../../services/tipoproducto.service';
import { TipoProducto } from '../../../../models/TipoProducto';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tipo-producto-listar',
  templateUrl: './tipo-producto-listar.component.html',
  styleUrl: './tipo-producto-listar.component.scss'
})
export class TipoProductoListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<TipoProducto>;

  constructor(private tipoProductoService: TipoProductoService) {  this.dataSource = new MatTableDataSource<TipoProducto>(); }

  ngOnInit(): void {
    this.listarTipoProductos();
  }

  listarTipoProductos() {
    this.tipoProductoService.listarTodosLosTipoProductos().subscribe(
      clientes => {
        this.dataSource.data = clientes;
      },
      error => {
        console.error(error);
      }
    );
  }

  editarCliente() {
    console.log('Editar cliente:');
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Estas seguro que quieres eliminar este tipo de producto?')) {
      this.tipoProductoService.eliminarTipoProducto(id).subscribe(
        () => this.listarTipoProductos(),
        (error) => console.error(error)
      );
    }
  }
}
