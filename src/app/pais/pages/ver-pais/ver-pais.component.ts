import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params['id'])

    //   this.paisService.getPaisPorAlpha(params['id']).subscribe( pais => {
    //     console.log(pais)
    //   })

    // })

    this.activatedRoute.params
    .pipe(
      switchMap((param) => this.paisService.getPaisPorAlpha(param['id'])),
      tap(console.log)
    )
    .subscribe(pais => {
      console.log(pais);
      this.pais = pais;
    })
  }

}
