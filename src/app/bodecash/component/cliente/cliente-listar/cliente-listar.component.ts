import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../services/cliente.service';
import { Cliente } from '../../../../models/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { MatHeaderCell, MatCell } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatHeaderRow, MatRow } from '@angular/material/table';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [MatCell, MatHeaderCell, MatIcon, MatRow, MatHeaderRow, MatTable],
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit {
  clientes: Cliente[] = [];
  dataSource: MatTableDataSource<Cliente>;

  displayedColumns: string[] = ['codigo', 'username', 'nombres', 'apellidos', 'genero', 'direccion', 'dni', 'celular', 'acciones'];

  constructor(private clienteService: ClienteService) {
    this.dataSource = new MatTableDataSource<Cliente>();
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.listarTodosLosClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.dataSource.data = clientes;
    });
  }

  eliminarCliente(id: number) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(() => {
        this.loadClientes();
      });
    }
  }
}
