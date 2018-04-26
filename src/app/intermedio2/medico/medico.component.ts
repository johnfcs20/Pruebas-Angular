import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];


  constructor( public _medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico(nombre: string) {

    return `hola ${nombre}`;

  }

  obtenerMedicos() {

    this._medicoService.getMdicos().subscribe((medicos: any[]) => this.medicos = medicos);

  }

}
