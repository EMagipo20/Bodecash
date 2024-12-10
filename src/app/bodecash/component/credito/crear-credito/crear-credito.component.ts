import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../../../../services/cliente.service';
import { CreditoService } from '../../../../services/credito.service';
import { TipoCreditoEnum, TipoInteresEnum, PlazoGraciaEnum, NumeroDiasCuotaEnum } from '../../../../models/enums';
import { Cliente } from '../../../../models/cliente';
import { Credito } from '../../../../models/credito';
import { DetalleVentaService } from '../../../../services/detalle-venta.service';

@Component({
  selector: 'app-crear-credito',
  templateUrl:'./crear-credito.component.html',
  styleUrls: ['./crear-credito.component.scss']
})
export class CrearCreditoComponent implements OnInit {

  credito: Credito = new Credito();
  clientes: Cliente[] = [];
  tiposCredito = Object.values(TipoCreditoEnum);
  tiposInteres = Object.values(TipoInteresEnum);
  plazosGracia = Object.values(PlazoGraciaEnum);
  diasCuota = Object.values(NumeroDiasCuotaEnum);

  constructor(
    private creditoService: CreditoService,
    private clienteService: ClienteService,
    private detalleVentaService: DetalleVentaService,
    private snackBar: MatSnackBar // Inyectar MatSnackBar
  ) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.listarTodosLosClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Error al listar los clientes', error);
        this.snackBar.open('Error al listar los clientes', 'Cerrar', { duration: 3000 });
      }
    );
  }

  onClienteChange(clienteId: number): void {
    this.detalleVentaService.MontoTotal(clienteId).subscribe(
      (montoTotal) => {
        this.credito.monto = montoTotal;
        this.credito.idCliente = clienteId; // Asegurarse de asignar el ID del cliente
      },
      (error) => {
        console.error('Error al obtener el monto total del cliente', error);
        this.snackBar.open('Error al obtener el monto total del cliente', 'Cerrar', { duration: 3000 });
      }
    );
  }

  resetForm(): void {
    this.credito = new Credito();
  }

  onSubmit(): void {
    const nuevoCredito = {
      fechaInicio: this.credito.fechaInicio,
      fechaFin: this.credito.fechaFin,
      tipoCredito: this.credito.tipoCredito,
      tipoInteres: this.credito.tipoInteres,
      plazoGracia: this.credito.plazoGracia,
      numeroDiasCuota: this.credito.numeroDiasCuota,
      idCliente: this.credito.idCliente
    };

    console.log('Datos del crédito a enviar:', nuevoCredito);

    this.creditoService.registrarCredito(nuevoCredito as Credito).subscribe(
      (response) => {
        console.log('Crédito registrado con éxito', response);
        this.snackBar.open('Crédito registrado con éxito', 'Cerrar', { duration: 3000 });
        this.resetForm();
      },
      (error) => {
        console.error('Error al registrar el crédito:', error);
        this.snackBar.open('Error al registrar el crédito', 'Cerrar', { duration: 3000 });
        if (error.status) {
          console.error(`Status Code: ${error.status}`);
        }
        if (error.message) {
          console.error(`Message: ${error.message}`);
        }
        if (error.error) {
          console.error(`Error Details: ${JSON.stringify(error.error)}`);
        }
      }
    );
  }
}