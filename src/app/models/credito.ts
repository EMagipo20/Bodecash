import { Cliente } from "./cliente";
import { DetalleCredito } from "./detalleCreditos";

export class Credito {
    id: number = 0;
    monto: number = 0;
    fechaInicio: string = '';
    fechaFin: string = '';
    estado: boolean = false;
    tipoCredito: TipoCreditoEnum = TipoCreditoEnum.CORTO_PLAZO;
    tipoInteres: TipoInteresEnum = TipoInteresEnum.NOMINAL;
    plazoGracia: PlazoGraciaEnum = PlazoGraciaEnum.SIN_GRACIA;
    numeroDiasCuota: NumeroDiasCuotaEnum = NumeroDiasCuotaEnum.MENSUAL;

    cliente: Cliente = new Cliente();
    detalleCreditos: DetalleCredito[] = [];
}

export enum TipoCreditoEnum {
    CORTO_PLAZO = "CORTO_PLAZO",
    LARGO_PLAZO = "LARGO_PLAZO"
}

export enum TipoInteresEnum {
    EFECTIVO = "EFECTIVO",
    NOMINAL = "NOMINAL",
    ANUALIDAD_SIMPLE = "ANUALIDAD_SIMPLE"
}

export enum PlazoGraciaEnum {
    CON_GRACIA = "CON_GRACIA",
    SIN_GRACIA = "SIN_GRACIA"
}

export enum NumeroDiasCuotaEnum {
    QUINCENAL = "QUINCENAL",
    MENSUAL = "MENSUAL"
}
