import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, SalesPerson } from '@core/models';
import { StoreService, SalesPersonService } from '@core/services';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent {

  stores: Store[] = [];
  salesPersons: SalesPerson[] = [];

  constructor(private activatedRoute: ActivatedRoute, private storeService: StoreService,
    private salesPersonService: SalesPersonService) {
    this.activatedRoute.params.subscribe(params => {
      const id = Number(params['id']);
      this.storeService.getStoresByStateId(id).subscribe(stores => {
        this.stores = stores;
      });

      this.salesPersonService.getSalesPersonsByStateId(id).subscribe(salesPersons => {
        this.salesPersons = salesPersons;
      });
    });
  }

  ngOnInit(): void { }
}
