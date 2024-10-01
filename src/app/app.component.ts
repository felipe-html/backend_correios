import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateModule } from "./template/template.module";
import { HomeComponent } from "./home/home.component";
import { GestoresFormComponent } from './gestores/gestores-form/gestores-form.component';
import { ClientesService } from './clientes.service';
import { HttpClientJsonpModule } from '@angular/common/http'

import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateModule,HttpClientJsonpModule, HomeComponent, GestoresFormComponent],
  providers:[ClientesService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from styleUrl to styleUrls
})
export class AppComponent implements AfterViewInit {
  title = 'correios-frontend';

  ngAfterViewInit() {
    (function($) {
      "use strict";
  
      // Add active state to sidebar nav links
      const path = window.location.href; // Absolute path
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        const anchor = this as HTMLAnchorElement; // Cast this to HTMLAnchorElement
        if (anchor.href === path) {
          $(this).addClass("active");
        }
      });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e: JQuery.Event) { // Add type for e
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
