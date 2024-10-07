import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-grafico-um',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './grafico-um.component.html',
  styleUrl: './grafico-um.component.css'
})
export class GraficoUmComponent {
  chartOptions = {
    title:{
      text: "Angular Column Chart"  
    },
    animationEnabled: true,
    data: [{        
      type: "column",
      dataPoints: [
        {label:"janeiro", x: 10, y: 71 },
        {label:"Fevereiro", x: 20, y: 55 },
        {label:"Março", x: 30, y: 50 },
        {label:"Abril", x: 40, y: 65 },
        {label:"Maio", x: 50, y: 95 },
        {label:"Junho", x: 60, y: 68 },
        {label:"Julho", x: 70, y: 28 },
        {label:"Agosto", x: 80, y: 34 },
        {label:"Setembro", x: 90, y: 14 }
      ]
    }]
  }	
}                              
