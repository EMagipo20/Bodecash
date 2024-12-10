import { Producto } from "./producto";
import { Cliente } from "./cliente";

export class DetalleVenta {
    id: number = 0;
    cantidad: number = 0;
    precio: number = 0.0;
    fechaVenta: Date = new Date();
    idProducto: Producto = new Producto();
    idCliente: Cliente = new Cliente();
}