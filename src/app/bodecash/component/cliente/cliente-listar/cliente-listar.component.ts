import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../../../models/cliente';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'correo', 'numeroDocumento', 'telefono', 'limiteCredito', 'direccion'];
  dataSource: MatTableDataSource<Cliente>;

  constructor(private clienteService: ClienteService) {
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
}
