import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesPersonRoutingModule } from './sales-person-routing.module';
import { SalesPersonsComponent, SalesPersonFormComponent } from './components';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SalesPersonsComponent,
    SalesPersonFormComponent
  ],
  imports: [
    CommonModule,
    SalesPersonRoutingModule,
    SharedModule
  ],
  entryComponents: [
    SalesPersonFormComponent
  ]
})
export class SalesPersonModule { }
