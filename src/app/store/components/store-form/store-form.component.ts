import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City, Country, State, Store } from '@core/models';
import { LookupService, StoreService } from '@core/services';
import { NotificationService } from '@shared/services';

export interface DialogData {
  storeId: 0;
}

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent {

  store: Store;
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];

  storeForm = this.fb.group({
    name: ['', Validators.required],
    address1: ['', Validators.required],
    address2: [''],
    address3: [''],
    cityId: [0, [Validators.required, Validators.min(1)]],
    stateId: [0, [Validators.required, Validators.min(1)]],
    countryId: [0, [Validators.required, Validators.min(1)]],
    zipCode: ['']
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder, private storeService: StoreService, private lookupService: LookupService,
    private notificationService: NotificationService) {

      this.lookupService.getCountries().subscribe(countries => {
        this.countries = countries;
      });

    if (data.storeId) {
      this.storeService.getStoreById(data.storeId).subscribe(store => {
        console.log(store);
        this.store = store;
        this.storeForm.patchValue(this.store);
      });
    }

    this.store = {
      id: 0,
      name: '',
      address1: '',
      address2: '',
      address3: '',
      cityId: 0,
      stateId: 0,
      countryId: 0,
      zipCode: ''
    }

    this.storeForm.get("countryId")?.valueChanges.subscribe(countryId => {
      this.lookupService.getStatesByCountryId(countryId || 0).subscribe(states => {
        this.states = states;
      });
    });

    this.storeForm.get("stateId")?.valueChanges.subscribe(stateId => {
      this.lookupService.getCitiesByStateId(stateId || 0).subscribe(cities => {
        this.cities = cities;
      });
    });
  }

  get storeFormValue() {
    return this.storeForm.value as Store;
  }

  saveStore() {
    this.store = this.storeFormValue;
    if (this.store.id) {
      this.storeService.updateStore(this.store).subscribe(() => {
        this.notificationService.success("Store Updated", "").then(() => { });
      },
        (error) => {
          this.notificationService.error("Error", error.error).then(() => { });
        });
    } else {
      this.storeService.createStore(this.store).subscribe(() => {
        this.notificationService.success("Store Created", "").then(() => { });
      },
        (error) => {
          this.notificationService.error("Error", error.error).then(() => { });
        });
    }
  }

  cancelStore() {
    this.storeForm.reset();
  }
}
