import { Component } from '@angular/core';
import { GraficoUmComponent } from './grafico-um/grafico-um.component';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [GraficoUmComponent],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

}
