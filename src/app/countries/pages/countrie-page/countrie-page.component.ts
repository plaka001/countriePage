import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Countrie } from '../../interfaces/capital.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-countrie-page',
  templateUrl: './countrie-page.component.html',
  styles: ``,
})
export class CountriePageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}
  public data?: any;
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.getInfoCountrie(id)))
      .subscribe((resp) => {
        if (!resp) {
          return this.router.navigateByUrl('by-capital');
        }
        this.data = resp;
        console.log(this.data);

        return;
      });
  }
}
