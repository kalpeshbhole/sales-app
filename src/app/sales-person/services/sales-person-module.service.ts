import { Injectable } from '@angular/core';
import { SalesPersonFormComponent } from '../components';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SalesPersonModuleService {

  constructor(public dialog: MatDialog) { }

  openSalesPersonFormDialog(salesPersonId: number = 0) {
    this.dialog.open(SalesPersonFormComponent, {
      data: {
        salesPersonId: salesPersonId,
      },
    });
  }
}
