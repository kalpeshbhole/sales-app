import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '@core/constants';
import { State } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private httpClient: HttpClient) { }

  getStatesByCountryId(countryId: number){
    return this.httpClient.get<State[]>(`${APIs.Lookup}/States/countryId/${countryId}`);
  }
}
