import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestoresFormComponent } from './gestores-form/gestores-form.component';

const routes: Routes = [
  {path:'gestores-form', component: GestoresFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestoresRoutingModule { }
