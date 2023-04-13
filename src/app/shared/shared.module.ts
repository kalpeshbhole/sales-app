import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { CustomHeaderComponent, FooterComponent, LoaderComponent, NotFoundComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    CustomHeaderComponent,
    LoaderComponent,
    FooterComponent
  ],
  declarations: [
    CustomHeaderComponent,
    NotFoundComponent,
    LoaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
