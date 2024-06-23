import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {ClienteListarComponent} from './cliente-listar/cliente-listar.component'
import { ClienteCrearComponent } from './cliente-crear/cliente-crear.component';
@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterOutlet, ClienteListarComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  constructor(public route:ActivatedRoute) {}

}


