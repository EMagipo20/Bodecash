import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../../../services/credito.service';
import { Credito } from '../../../../models/credito';
import { Cliente } from '../../../../models/cliente';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-listar-creditos',
  templateUrl: './listar-creditos.component.html',
  styleUrls: ['./listar-creditos.component.scss']
})
export class ListarCreditosComponent implements OnInit {
  creditos: Credito[] = [];
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['idCredito', 'monto', 'fechaInicio', 'fechaFin', 'estado', 'tipoCredito', 'tipoInteres', 'plazoGracia', 'numeroDiasCuota', 'idCliente', 'acciones'];

  constructor(private creditoService: CreditoService, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.creditoService.listarCreditos().subscribe((data: Credito[]) => {
      this.creditos = data;
    });

    this.clienteService.listarTodosLosClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  getClienteNombre(idCliente: number): string {
    const cliente = this.clientes.find(c => c.id === idCliente);
    return cliente ? cliente.nombre : 'Desconocido';
  }

  eliminarCredito(id: number): void {
    this.creditoService.eliminarCredito(id).subscribe(() => {
      this.creditos = this.creditos.filter(c => c.id !== id);
    });
  }
}