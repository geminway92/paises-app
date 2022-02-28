import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {

  @Input() paises: Country[] = [];

  constructor(private paisService: PaisService) { }


}
