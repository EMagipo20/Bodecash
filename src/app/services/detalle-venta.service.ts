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

    registrarDetalleVenta(detalleVentaDTO: DetalleVenta): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/registrar`, detalleVentaDTO);
    }

    actualizarDetalleVenta(id: number, detalleVentaDTO: DetalleVenta): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/actualizar/${id}`, detalleVentaDTO);
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
}
