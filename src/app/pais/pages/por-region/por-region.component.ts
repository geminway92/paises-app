import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS' ,'CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];
  termino: string = '';

  constructor( private paisService: PaisService ) { }

  buscar(termino: string){

    this.termino = termino;

    this.paisService.buscarRegion(this.termino).subscribe(paises => {
      this.paises = paises;
    }, (err) => {
      this.paises = [];
    })
  }

  getClaseCSS(region: string):string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn-outline-primary';
  }

  activarRegion( region: string){
    if(region === this.regionActiva){return}
    this.regionActiva = region;
    this.buscar(this.regionActiva);


    //TODO: hacer el llamado al servicio
  }


}
