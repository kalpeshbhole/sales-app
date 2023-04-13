import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoresComponent, StoreFormComponent } from './components';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    StoresComponent,
    StoreFormComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ],
  entryComponents: [
    StoreFormComponent
  ]
})
export class StoreModule { }
