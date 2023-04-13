import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards';
import { SalesPersonsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: SalesPersonsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesPersonRoutingModule { }
