import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/components';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'regions', loadChildren: () => import('./region/region.module').then(m => m.RegionModule) },
  { path: 'stores', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'sales-persons', loadChildren: () => import('./sales-person/sales-person.module').then(m => m.SalesPersonModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
