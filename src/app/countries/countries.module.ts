import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriePageComponent } from './pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriePageComponent } from './pages/countrie-page/countrie-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountriePageComponent,
    ByRegionPageComponent,
    CountriePageComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
  exports: [],
})
export class CountriesModule {}
