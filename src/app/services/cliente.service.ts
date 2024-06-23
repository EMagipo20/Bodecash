import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = `${environment.chBase}/clientes`;

  constructor(private http: HttpClient) { }

  // Registrar cliente
  registrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/registrar`, cliente);
  }

  // Actualizar cliente
  actualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/actualizar/${id}`, cliente);
  }

  // Listar todos los clientes
  listarTodosLosClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/listar`);
  }

  // Buscar cliente por nombre
  buscarClientePorNombre(nombre: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/buscar/${nombre}`);
  }

  // Eliminar cliente
  eliminarCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/eliminar/${id}`);
  }
}
