import { MedicosService } from './medicos.service';
// tslint:disable-next-line:import-spacing
import{Component, OnInit} from '@angular/core';

@Component({

  selector: 'app-medicos',
  template: `
  <p> Medicos Works</p>
  `,
  styles: []
})

export class MedicosComponent implements OnInit {

public medicos: any[] = [];
public mensajeError: string;

constructor( public _medicosService: MedicosService) {}

ngOnInit() {
  this._medicosService.getMedicos().subscribe(medicos => this.medicos = medicos);
}

agregarMedico() {
  const medico = {nombre: 'Medico Juan Carlos'};
  this._medicosService.agregarMedico(medico)
                      .subscribe(medicoDB => this.medicos.push(medicoDB), err => this.mensajeError = err );
}

borrarMedico(id: string) {

  const confirmar = confirm('Estas seguro que desea borrar este medico');

  if (confirmar) {
    this._medicosService.borrarMedico(id);
  }

 }

}
