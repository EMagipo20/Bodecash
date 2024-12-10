import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleVentaService } from '../../../../services/detalle-venta.service';
import { DetalleVenta } from '../../../../models/detalleVenta';

@Component({
  selector: 'app-listar-detalles-venta-por-cliente',
  templateUrl: './listar-detalles-venta-por-cliente.component.html',
  styleUrls: ['./listar-detalles-venta-por-cliente.component.scss']
})
export class ListarDetallesVentaPorClienteComponent implements OnInit {
  displayedColumns: string[] = ['montoTotal', 'detallesVenta'];
   dataSource: MatTableDataSource<DetalleVenta> ;
   clienteId: number | null = null; // Propiedad para almacenar el ID del cliente a filtrar
 
   constructor(private detalleVentaService: DetalleVentaService) {
     this.dataSource = new MatTableDataSource<DetalleVenta>();
   }
 
   ngOnInit() {
     this.listardetallesVenta();
   }
    
   listardetallesVenta() {
     this.detalleVentaService.listarTodosLosDetallesVenta().subscribe(
       detalleVenta => {
         this.dataSource.data = detalleVenta;
       },
       error => {
         console.error('Error al listar los detalles de venta:',error);
       }
     );
     this.clienteId = null; // Reinicia el ID del cliente
   }
   
   filtrarPorCliente() {
     if (this.clienteId !== null) {
         this.detalleVentaService.listarDetalleVentaPorCliente(this.clienteId).subscribe(
             detalleVenta => {
                 this.dataSource.data = Array.isArray(detalleVenta) ? detalleVenta : [detalleVenta];
             },
             error => {
                 console.error('Error al filtrar los detalles de venta por cliente:', error);
             }
         );
     }
 }
}
