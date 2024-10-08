import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-grafico-cinco',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './grafico-cinco.component.html',
  styleUrl: './grafico-cinco.component.css'
})
export class GraficoCincoComponent {
  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    colorSet: "customColorSet",
    title:{
      text: "Tempo Patrimonial"
    },
    data: [{
      type: "doughnut",
      indexLabel: "{name}: {y}",
      innerRadius: "90%",
      yValueFormatString: "#,##0.00'%'",
      dataPoints: [
      { y: 33, name: "10 ANOS" },
      { y: 25, name: "5 ANOS" },
      { y: 13.5, name: "3 ANOS" },
      { y: 11, name: "1 ANO" },
      
      ]
    }]
    }
}                              
