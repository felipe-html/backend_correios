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
      text: "Global Waste Treatment and Disposal"
    },
    data: [{
      type: "doughnut",
      indexLabel: "{name}: {y}",
      innerRadius: "90%",
      yValueFormatString: "#,##0.00'%'",
      dataPoints: [
      { y: 33, name: "Open Dump" },
      { y: 25, name: "Landfill" },
      { y: 13.5, name: "Recycling" },
      { y: 11, name: "Incineration" },
      { y: 7.7, name: "Sanitary Landfill (with landfill gas collection)" },
      { y: 5.5, name: "Composting" },
      { y: 4, name: "Controlled Landfill" },
      { y: 0.3, name: "Others" }
      ]
    }]
    }
}                              
