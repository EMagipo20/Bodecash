import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../../services/pago.service';
import { Pagos } from '../../../../models/pagos';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-pagos',
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.scss']
})
export class ListarPagosComponent implements OnInit {
  pagos: Pagos[] = [];
  displayedColumns: string[] = ['idPago', 'monto', 'fechaPago', 'tipoPago', 'estado', 'acciones'];

  constructor(private pagoService: PagoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.listarPagos();
  }

  listarPagos(): void {
    this.pagoService.listarPagos().subscribe(
      (pagos) => {
        this.pagos = pagos;
      },
      (error) => {
        this.snackBar.open('Error al listar los pagos', 'Cerrar', { duration: 3000 });
      }
    );
  }

  eliminarPago(id: number): void {
    this.pagoService.eliminarPago(id).subscribe(
      () => {
        this.snackBar.open('Pago eliminado con éxito', 'Cerrar', { duration: 3000 });
        this.listarPagos(); // Refrescar la lista después de eliminar
      },
      (error) => {
        this.snackBar.open('Error al eliminar el pago', 'Cerrar', { duration: 3000 });
      }
    );
  }
}
