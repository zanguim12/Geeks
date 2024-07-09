import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MaterialModule
  ],
  exports: [
    MatToolbarModule,
    MaterialModule
  ]
})
export class SharedModule { }
