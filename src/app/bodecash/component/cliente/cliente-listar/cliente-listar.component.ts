import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [],
  templateUrl: './cliente-listar.component.html',
  styleUrl: './cliente-listar.component.scss'
})
export class ClienteListarComponent implements OnInit {
  ngOnInit(): void {

  }

}
