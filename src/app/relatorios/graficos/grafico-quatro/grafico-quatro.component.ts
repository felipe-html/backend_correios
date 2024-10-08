import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-grafico-quatro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './grafico-quatro.component.html',
  styleUrl: './grafico-quatro.component.css'
})
export class GraficoQuatroComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Distribuição do patrimônio"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Nova entrada" },
		  { y: 10, name: "Entrada por Compra" },
		  { y: 20, name: "Transferência Interna " },
		  { y: 15, name: "Transferência Externa" },
		 
		]
	  }]
	}	
}                              
