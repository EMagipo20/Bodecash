import { Cliente } from './cliente';
import { DetalleCredito } from './detalleCreditos';
import { TipoCreditoEnum, TipoInteresEnum, PlazoGraciaEnum, NumeroDiasCuotaEnum } from './enums';

export class Credito {
    id: number = 0;
    monto: number = 0.0;
    fechaInicio: Date = new Date();
    fechaFin: Date = new Date();
    estado: boolean = false;
    tipoCredito: TipoCreditoEnum = TipoCreditoEnum.CORTO_PLAZO;
    tipoInteres: TipoInteresEnum = TipoInteresEnum.NOMINAL;
    plazoGracia: PlazoGraciaEnum = PlazoGraciaEnum.CERO;
    numeroDiasCuota: NumeroDiasCuotaEnum = NumeroDiasCuotaEnum.TREINTA;

    idCliente: number = 0;
    detalleCreditos: DetalleCredito[] = [];
}