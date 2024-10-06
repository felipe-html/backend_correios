import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LinhaComponent } from "./graficos/linha/linha.component";
import { TortaComponent } from "./graficos/torta/torta.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule, LinhaComponent, TortaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  
}   