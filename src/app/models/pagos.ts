import { DetalleCredito } from "./detalleCreditos";

export class Pagos {
    idPago: number = 0;
    monto: number = 0.0;
    fechaPago: string = '';
    tipoPago: string = '';
    estado: boolean = false;
    idDetalleCredito: DetalleCredito = new DetalleCredito();
}