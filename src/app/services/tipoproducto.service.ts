import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProducto } from '../models/TipoProducto';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  private baseUrl = `${environment.chBase}/productos`;

  constructor(private httpClient: HttpClient) { }
  registrarTipoProducto(tipoProducto: TipoProducto): Observable<TipoProducto> {
    return this.httpClient.post<TipoProducto>(this.baseUrl + '/registrar', tipoProducto);
  }

  actualizarTipoProducto(id: number, tipoProducto: TipoProducto): Observable<TipoProducto> {
    return this.httpClient.put<TipoProducto>(this.baseUrl + `/actualizar/${id}`, tipoProducto);
  }

  listarTodosLosTipoProductos(): Observable<TipoProducto[]> {
    return this.httpClient.get<TipoProducto[]>(this.baseUrl + '/listar');
  }

  eliminarTipoProducto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/eliminar/${id}`);
  }
}