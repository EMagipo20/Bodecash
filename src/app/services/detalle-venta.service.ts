import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleVenta } from '../models/detalleVenta';
import { environment } from '../../environments/enviroment';

@Injectable({
    providedIn: 'root'
})
export class DetalleVentaService {
    private baseUrl =`${environment.chBase}/detalleVenta`;

    constructor(private http: HttpClient) {}

    registrarDetalleVenta(detalleVenta: DetalleVenta): Observable<DetalleVenta> {
        return this.http.post<DetalleVenta>(`${this.baseUrl}/registrar`, detalleVenta);
    }

    actualizarDetalleVenta(id: number, detalleVenta: DetalleVenta): Observable<DetalleVenta> {
        return this.http.put<DetalleVenta>(`${this.baseUrl}/actualizar/${id}`, detalleVenta);
    }

    listarDetalleVentaPorCliente(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/listar/${id}`);
    }

    listarTodosLosDetallesVenta(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/listar`);
    }

    eliminarDetalleVenta(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/eliminar/${id}`);
    }

    MontoTotal(idCliente: number): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/monto-total/${idCliente}`);
    }
}
