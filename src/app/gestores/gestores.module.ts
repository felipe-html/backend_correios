import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestoresRoutingModule } from './gestores-routing.module';
import { GestoresFormComponent } from './gestores-form/gestores-form.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    GestoresRoutingModule,
    GestoresFormComponent,
    FormsModule
  ],
  exports: [
    GestoresFormComponent
  ]
})
export class GestoresModule { }
