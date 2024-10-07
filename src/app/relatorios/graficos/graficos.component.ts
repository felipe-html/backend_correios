import { Component } from '@angular/core';
import { GraficoUmComponent } from './grafico-um/grafico-um.component';
import { GraficosDoisComponent } from "./graficos-dois/graficos-dois.component";
import { GraficoTresComponent } from './grafico-tres/grafico-tres.component';
import { GraficoQuatroComponent } from './grafico-quatro/grafico-quatro.component';
import { GraficoCincoComponent } from './grafico-cinco/grafico-cinco.component';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [GraficoUmComponent, GraficosDoisComponent, GraficoTresComponent, GraficoQuatroComponent,GraficoCincoComponent],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

}
