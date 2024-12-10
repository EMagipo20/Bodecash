import { Credito } from "./credito";
import { Pagos } from "./pagos";

export class DetalleCredito {
    idDetalleCredito: number = 0;
    saldoInicial: number = 0;
    interes: number = 0;
    renta: number = 0;
    amortizacion: number = 0;
    saldoFinal: number = 0;
    fechaPagoCuota: string = '';
    estadoPago: boolean = false;
    mora: number = 0;
    idCredito: Credito = new Credito();
    pagos: Pagos[] = [];
}
