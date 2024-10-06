import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-torta',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './torta.component.html',
  styleUrl: './torta.component.css'
})
export class TortaComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Compras por periodo"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Ferramentas" },
		  { y: 28.2, name: "Peças reposição" },
		  { y: 14.4, name: "Mobiliario" },
		  { y: 43.3, name: "Serviços" }
		]
	  }]
	}	
}                         