import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/capital.interface';

@Component({
  selector: 'countries-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: ``,
})
export class ByCountriePageComponent {
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

  getDataByCountrie(term: string): void {
    const tipo: string = 'name';
    this.countrieService.searchDataByTerm(term, tipo).subscribe((resp) => {
      this.data = resp;
    });
  }
}
