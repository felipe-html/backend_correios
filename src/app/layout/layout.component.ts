import { AfterViewInit, Component } from '@angular/core';
import { TemplateModule } from "../template/template.module";
import { NavbarComponent } from "../template/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { EntradaComponent } from '../login/entrada/entrada.component';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { GestoresFormComponent } from '../gestores/gestores-form/gestores-form.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, TemplateModule, HttpClientJsonpModule,EntradaComponent, FormsModule, HomeComponent, GestoresFormComponent, EntradaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements AfterViewInit {
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
