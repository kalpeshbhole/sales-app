import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '@core/constants';
import { SalesPerson } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class SalesPersonService {

  constructor(private httpClient: HttpClient) { }

  getSalesPersons() {
    return this.httpClient.get<SalesPerson[]>(`${APIs.SalesPerson}`);
  }

  getSalesPersonById(salesPersonId: number) {
    return this.httpClient.get<SalesPerson>(`${APIs.SalesPerson}/${salesPersonId}`);
  }

  getSalesPersonsByStateId(stateId: number) {
    return this.httpClient.get<SalesPerson[]>(`${APIs.SalesPerson}/state/${stateId}`);
  }

  createSalesPerson(salesPerson: SalesPerson) {
    return this.httpClient.post(`${APIs.SalesPerson}`, salesPerson);
  }

  updateSalesPerson(salesPerson: SalesPerson) {
    return this.httpClient.put(`${APIs.SalesPerson}/${salesPerson.id}`, salesPerson);
  }
}
