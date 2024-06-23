import { DetalleCredito } from "./detalleCreditos";

export class Pagos {
    id: number = 0;
    monto: number = 0;
    fechaPago: string = '';
    tipoPago: string = '';
    estado: boolean = false;
    idDetalleCredito: DetalleCredito = new DetalleCredito();
}