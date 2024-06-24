import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../../../models/cliente';
import { ClienteService } from '../../../../services/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'correo', 'numeroDocumento', 'telefono', 'limiteCredito', 'direccion', 'acciones'];
  dataSource: MatTableDataSource<Cliente>;

  constructor(private clienteService: ClienteService, private snackbar: MatSnackBar, private router: Router) {
    this.dataSource = new MatTableDataSource<Cliente>();
  }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService.listarTodosLosClientes().subscribe(
      clientes => {
        this.dataSource.data = clientes;
      },
      error => {
        console.error(error);
      }
    );
  }

  editarCliente() {
    this.router.navigate(['/cliente-crear']);
  }

  eliminarCliente(cliente: Cliente) {
    this.clienteService.eliminarCliente(cliente.id).subscribe(
      () => {
        this.snackbar.open('Cliente eliminado correctamente', 'Cerrar');
        this.listarClientes();
      },
      (error) => {
        this.snackbar.open('Error al eliminar cliente', 'Cerrar');
      }
    );
  }
}
