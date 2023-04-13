import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@core/models';
import {APIs} from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getStoresByStateId(stateId: number) {
    return this.httpClient.get<Store[]>(`${APIs.Store}/state/${stateId}`);
  }
}
