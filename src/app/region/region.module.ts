import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionsComponent, RegionDetailsComponent } from './components';
import { SharedModule } from '@shared/shared.module';
import { RegionComponent } from './components/region/region.component';

@NgModule({
  declarations: [
    RegionsComponent,
    RegionDetailsComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    SharedModule
  ]
})
export class RegionModule { }
