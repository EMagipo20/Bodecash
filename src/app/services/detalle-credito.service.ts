import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleCredito } from '../models/detalleCreditos';
import { environment } from '../../environments/enviroment';

@Injectable({
    providedIn: 'root'
})
export class DetalleCreditoService {
    private baseUrl = `${environment.chBase}/detallesCredito`;

    constructor(private http: HttpClient) {}

    listarDetallesPorCredito(idCredito: number): Observable<DetalleCredito[]> {
        return this.http.get<DetalleCredito[]>(`${this.baseUrl}/listar/${idCredito}`);
    }
}
