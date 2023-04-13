import { Component } from '@angular/core';
import { Store } from '@core/models';
import { StoreService } from '@core/services';
import { StoreModuleService } from '../../services';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {

  displayedColumns: string[] = ['id', 'name','address', 'createByUser', 'createDate', 'updateByUser', 'updateDate'];

  stores: Store[] = [];

  constructor(private storeService: StoreService, private storeModuleService: StoreModuleService) {
    this.storeService.getStores().subscribe(stores => {
      this.stores = stores;
    });
  }

  addStore(){
    this.storeModuleService.openStoreFormDialog();
  }
  showStoreDetails(salesPersonId: number){
    this.storeModuleService.openStoreFormDialog(salesPersonId);
  }
}
