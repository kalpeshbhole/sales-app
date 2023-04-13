import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@core/models';
import {APIs} from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getStores() {
    return this.httpClient.get<Store[]>(`${APIs.Store}`);
  }

  getStoreById(storeId: number) {
    return this.httpClient.get<Store>(`${APIs.Store}/${storeId}`);
  }

  getStoresByStateId(stateId: number) {
    return this.httpClient.get<Store[]>(`${APIs.Store}/state/${stateId}`);
  }

  createStore(store: Store) {
    return this.httpClient.post(`${APIs.Store}`, store);
  }

  updateStore(store: Store) {
    return this.httpClient.put(`${APIs.Store}`, store);
  }

}
