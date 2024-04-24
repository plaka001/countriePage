import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { AlertDataComponent } from './components/alert-data/alert-data.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContacPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    TableCountriesComponent,
    AlertDataComponent,
    LoadingSpinerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarComponent,
    SearchBoxComponent,
    TableCountriesComponent,
    LoadingSpinerComponent,
  ],
})
export class SharedModule {}
