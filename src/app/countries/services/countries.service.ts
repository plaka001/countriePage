import { Injectable } from '@angular/core';
import { Countrie } from '../interfaces/capital.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';

const urlBase = 'https://restcountries.com/v3.1/';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  searchDataByTerm(busqueda: string, tipo: string): Observable<Countrie[]> {
    const url: string = `${urlBase}${tipo}/${busqueda}`;
    return this.http.get<Countrie[]>(url).pipe(
      catchError((error) => of([])),
      delay(2000)
    );
  }

  getInfoCountrie(city: string): Observable<Countrie | null> {
    const url: string = `${urlBase}alpha/${city}`;
    return this.http.get<Countrie[]>(url).pipe(
      map((countrie) => (countrie.length > 0 ? countrie[0] : null)),
      catchError((error) => of(null))
    );
  }
}
