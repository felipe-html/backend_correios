import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,NavbarComponent, SidebarComponent, FooterComponent,RouterModule
  ],
  exports:[
    NavbarComponent,SidebarComponent, FooterComponent
  ]
})
export class TemplateModule { }
