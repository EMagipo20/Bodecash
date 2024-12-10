import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetalleCreditoService } from '../../../../services/detalle-credito.service';
import { DetalleCredito } from '../../../../models/detalleCreditos';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-detalles-credito',
  templateUrl: './listar-detalles-credito.component.html',
  styleUrls: ['./listar-detalles-credito.component.scss']
})
export class ListarDetallesCreditoComponent implements OnInit {
  filterForm: FormGroup;
  detallesCredito: DetalleCredito[] = [];
  displayedColumns: string[] = [
    'idDetalleCredito',
    'saldoInicial',
    'interes',
    'renta',
    'amortizacion',
    'saldoFinal',
    'fechaPagoCuota',
    'estadoPago',
    'mora',
    'idCredito'
  ];

  constructor(
    private fb: FormBuilder,
    private detalleCreditoService: DetalleCreditoService,
    private snackBar: MatSnackBar
  ) {
    this.filterForm = this.fb.group({
      idCredito: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  listarDetalles(idCredito: number): void {
    this.detalleCreditoService.listarDetallesPorCredito(idCredito).subscribe(
      (detalles) => {
        this.detallesCredito = detalles;
      },
      (error) => {
        console.error('Error al listar los detalles del crédito:', error);
        this.snackBar.open('Error al listar los detalles del crédito', 'Cerrar', { duration: 3000 });
      }
    );
  }

  onSubmit(): void {
    if (this.filterForm.valid) {
      const idCredito = this.filterForm.get('idCredito')?.value;
      this.listarDetalles(idCredito);
    } else {
      this.snackBar.open('Por favor, ingrese un ID de crédito válido', 'Cerrar', { duration: 3000 });
    }
  }
}
