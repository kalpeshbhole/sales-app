import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country, SalesPerson, State } from '@core/models';
import { LookupService, SalesPersonService } from '@core/services';
import { NotificationService } from '@shared/services';

export interface DialogData {
  salesPersonId: 0;
}

@Component({
  selector: 'app-sales-person-form',
  templateUrl: './sales-person-form.component.html',
  styleUrls: ['./sales-person-form.component.css']
})
export class SalesPersonFormComponent {

  salesPerson: SalesPerson;
  countries: Country[] = [];
  states: State[] = [];

  salesPersonForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    regions: this.fb.array([])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder, private salesPersonService: SalesPersonService, private lookupService: LookupService,
    private notificationService: NotificationService) {

      this.lookupService.getCountries().subscribe(countries => {
        this.countries = countries;
      });

    if (data.salesPersonId) {
      this.salesPersonService.getSalesPersonById(data.salesPersonId).subscribe(salesPerson => {
        console.log(salesPerson);
        this.salesPerson = salesPerson;
        this.salesPersonForm.patchValue(this.salesPerson);
        this.salesPerson.regions.forEach(region => {
          this.regionsFA.push(this.fb.group({
            stateId: [region.stateId, Validators.min(1)],
            isPrimary: [region.isPrimary, Validators.required]
          }))
        })
      });
    }

    this.salesPerson = {
      id: 0,
      firstName: '',
      middleName: '',
      lastName: '',
      regions: []
    }
  }

  changeCountry(countryId: number) {
    this.lookupService.getStatesByCountryId(countryId).subscribe(states => {
      this.states = states;
    });
  }

  get regionsFA(): FormArray {
    return this.salesPersonForm.get("regions") as FormArray;
  }

  get salesPersonFormValue() {
    return this.salesPersonForm.value as SalesPerson;
  }

  newRegion(): FormGroup {
    return this.fb.group({
      stateId: [null, Validators.min(1)],
      isPrimary: [false, Validators.required]
    });
  }

  addRegion() {
    this.regionsFA.push(this.newRegion());
  }

  removeRegion(index: number) {
    this.regionsFA.removeAt(index);
  }

  saveSalesPerson() {
    this.salesPerson = this.salesPersonFormValue;
    if (this.salesPerson.id) {
      this.salesPersonService.updateSalesPerson(this.salesPerson).subscribe(() => {
        this.notificationService.success("Store Updated","").then(() => {});
      },
      (error) => {
        this.notificationService.error("Error", error.error).then(() => {});
      });
    } else {
      this.salesPersonService.createSalesPerson(this.salesPerson).subscribe(() => {
        this.notificationService.success("Store Created","").then(() => {});
      },
      (error) => {
        this.notificationService.error("Error", error.error).then(() => {});
      });
    }
  }

  cancelSalesPerson() {
    this.salesPersonForm.reset();
    this.regionsFA.reset();
  }

}
