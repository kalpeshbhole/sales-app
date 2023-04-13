import { Component } from '@angular/core';
import { SalesPerson } from '@core/models';
import { SalesPersonService } from '@core/services';
import { SalesPersonModuleService } from '../../services';

@Component({
  selector: 'app-sales-persons',
  templateUrl: './sales-persons.component.html',
  styleUrls: ['./sales-persons.component.css']
})
export class SalesPersonsComponent {

  displayedColumns: string[] = ['id', 'name', 'createByUser', 'createDate', 'updateByUser', 'updateDate'];

  salesPersons: SalesPerson[] = [];

  constructor(private salesPersonService: SalesPersonService, private salesPersonModuleService: SalesPersonModuleService) {
    this.salesPersonService.getSalesPersons().subscribe(salesPersons => {
      this.salesPersons = salesPersons;
    });
  }

  addSalesPerson(){
    this.salesPersonModuleService.openSalesPersonFormDialog();
  }
  showSalesPersonDetails(salesPersonId: number){
    this.salesPersonModuleService.openSalesPersonFormDialog(salesPersonId);
  }
}
