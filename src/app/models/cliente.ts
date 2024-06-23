import { Usuario } from "./usuario";

export class Cliente {
    id: number = 0;
    nombre: string = '';
    apellido: string = '';
    correo: string = '';
    numeroDocumento: string = '';
    telefono: number = 0;
    limiteCredito: number = 0.0;
    direccion: string = '';
    idUsuario: Usuario = new Usuario();
}