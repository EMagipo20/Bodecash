import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagos } from '../models/pagos';
import { environment } from '../../environments/enviroment';

@Injectable({
    providedIn: 'root'
})
export class PagoService {
    private baseUrl = `${environment.chBase}/pagos`;

    constructor(private http: HttpClient) {}

    registrarPago(pago: Pagos): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/registrar`, pago);
    }

    actualizarPago(id: number, pago: Pagos): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/actualizar/${id}`, pago);
    }

    eliminarPago(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/eliminar/${id}`);
    }
}
