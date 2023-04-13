import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '@core/constants';
import { City, Country, State } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private httpClient: HttpClient) { }

  getCountries(){
    return this.httpClient.get<Country[]>(`${APIs.Lookup}/Countries`);
  }

  getStatesByCountryId(countryId: number){
    return this.httpClient.get<State[]>(`${APIs.Lookup}/States/countryId/${countryId}`);
  }

  getCitiesByStateId(stateId: number){
    return this.httpClient.get<City[]>(`${APIs.Lookup}/Cities/stateId/${stateId}`);
  }
}
