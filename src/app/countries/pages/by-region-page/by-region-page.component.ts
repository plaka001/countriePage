import { Component } from '@angular/core';
import { Countrie } from '../../interfaces/capital.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public data: Countrie[] = [];

  public headers: string[] = [
    'Pais name',
    'Capital name',
    'Pulation',
    'Continents',
    'bandera',
    '',
  ];

  constructor(private countrieService: CountriesService) {}

  getDataByRegion(term: string): void {
    const tipo: string = 'region';
    this.countrieService.searchDataByTerm(term, tipo).subscribe((resp) => {
      this.data = resp;
    });
  }
}
