import { Injectable } from '@angular/core';
import { StoreFormComponent } from '../components';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class StoreModuleService {

  constructor(public dialog: MatDialog) { }

  openStoreFormDialog(storeId: number = 0) {
    this.dialog.open(StoreFormComponent, {
      data: {
        storeId: storeId,
      },
    });
  }

}
