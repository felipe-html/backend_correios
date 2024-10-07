import { Component } from '@angular/core';
import { GraficoUmComponent } from './grafico-um/grafico-um.component';
import { GraficosDoisComponent } from "./graficos-dois/graficos-dois.component";
import { GraficoTresComponent } from './grafico-tres/grafico-tres.component';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [GraficoUmComponent, GraficosDoisComponent, GraficoTresComponent],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

}
