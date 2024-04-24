import { Component, Input } from '@angular/core';
import { Countrie } from '../../../countries/interfaces/capital.interface';

@Component({
  selector: 'shared-table-countries',
  templateUrl: './table-countries.component.html',
})
export class TableCountriesComponent {
  @Input()
  public headers: string[] = [];

  @Input()
  public data: Countrie[] = [];
}
