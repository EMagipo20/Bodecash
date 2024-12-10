import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagoService } from '../../../../services/pago.service';
import { DetalleCreditoService } from '../../../../services/detalle-credito.service';
import { DetalleCredito } from '../../../../models/detalleCreditos';
import { TipoPagoEnum } from '../../../../models/tipoPago';

@Component({
    selector: 'app-crear-actualizar-pago',
    templateUrl: './crear-actualizar-pago.component.html',
    styleUrls: ['./crear-actualizar-pago.component.scss']
})
export class CrearActualizarPagoComponent implements OnInit {
    pagoForm: FormGroup;
    detallesCredito: DetalleCredito[] = [];
    tiposPago = Object.values(TipoPagoEnum);
    selectedMonto: number = 0;

    constructor(
        private fb: FormBuilder,
        private pagoService: PagoService,
        private detalleCreditoService: DetalleCreditoService,
        private snackBar: MatSnackBar
    ) {
        this.pagoForm = this.fb.group({
            idDetalleCredito: ['', Validators.required],
            monto: [{ value: '', disabled: true }, [Validators.required, Validators.min(0)]],
            fechaPago: ['', Validators.required],
            tipoPago: ['', Validators.required],
            estado: [false]
        });
    }

    ngOnInit(): void {
        this.detalleCreditoService.listarTodos().subscribe(
            data => this.detallesCredito = data,
            err => this.showError('Error al cargar los detalles de crédito.')
        );
    }

    onDetalleCreditoChange(event: any): void {
        const selectedId = event.value;
        const selectedDetalle = this.detallesCredito.find(detalle => detalle.idDetalleCredito === selectedId);
        if (selectedDetalle) {
            this.selectedMonto = selectedDetalle.renta;
            this.pagoForm.get('monto')?.setValue(this.selectedMonto);
        }
    }

    registrarPago(): void {
        if (this.pagoForm.valid) {
            const nuevoPago = this.pagoForm.getRawValue(); // Use getRawValue to get the disabled form control value
            this.pagoService.registrarPago(nuevoPago).subscribe(
                response => this.showSuccess('Pago registrado exitosamente.'),
                err => this.showError('Error al registrar el pago.')
            );
        } else {
            this.showError('Por favor, complete todos los campos requeridos.');
        }
    }

    private showSuccess(message: string): void {
        this.snackBar.open(message, 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-success']
        });
    }

    private showError(message: string): void {
        this.snackBar.open(message, 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-error']
        });
    }
}
