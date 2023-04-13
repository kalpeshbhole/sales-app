import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards';
import { RegionComponent, RegionsComponent, RegionDetailsComponent,  } from './components';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: RegionComponent,
    children: [
      {
        path: ':id', component: RegionDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
