import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/capital.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  constructor(private countrieService: CountriesService) {}

  public headers: string[] = [
    'Pais name',
    'Capital name',
    'Pulation',
    'Continents',
    'bandera',
    '',
  ];
  public isLoading: boolean = false;
  public capitals: Countrie[] = [];

  searchByCapital(term: string) {
    this.isLoading = true;
    const tipo: string = 'capital';
    this.countrieService.searchDataByTerm(term, tipo).subscribe((resp) => {
      this.capitals = resp;
      this.isLoading = false;
    });
  }
}
