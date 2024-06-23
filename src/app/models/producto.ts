import { DetalleVenta } from "./detalleVenta";
import { TipoProducto } from "./TipoProducto";

export class Producto {
    id: number = 0;
    nombreProducto: string = '';
    detalleProducto: string = '';
    precio: number = 0;
    stock: number = 0;
    tipoProducto: TipoProducto = new TipoProducto();
    detalleVentas: DetalleVenta[] = [];
}