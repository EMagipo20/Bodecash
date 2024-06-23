import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../models/credito';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
    private baseUrl = `${environment.chBase}/creditos`;

  constructor(private http: HttpClient) { }

  registrarCredito(credito: Credito): Observable<Credito> {
    return this.http.post<Credito>(`${this.baseUrl}/registrar`, credito );
  }

  listarCreditos(): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.baseUrl}/listar`);
  }

  eliminarCredito(id: number): Observable<Credito> {
    return this.http.delete<Credito>(`${this.baseUrl}/eliminar/${id}`);
  }
}
