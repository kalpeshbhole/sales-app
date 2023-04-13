import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '@core/constants';
import { SalesPerson } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class SalesPersonService {

  constructor(private httpClient: HttpClient) { }

  getSalesPersonsByStateId(stateId: number) {
    return this.httpClient.get<SalesPerson[]>(`${APIs.SalesPerson}/state/${stateId}`);
  }
}
