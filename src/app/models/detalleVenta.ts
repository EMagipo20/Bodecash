import { Producto } from "./producto";
import { Cliente } from "./cliente";

export class DetalleVenta {
    id: number = 0;
    cantidad: number = 0;
    precio: number = 0;
    fechaVenta: Date = new Date();
    producto: Producto = new Producto();
    cliente: Cliente = new Cliente();
}