import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-graficos-dois',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './graficos-dois.component.html',
  styleUrl: './graficos-dois.component.css'
})
export class GraficosDoisComponent {
  step:number = Math.pow(10, .05);
  chartOptions = {
    zoomEnabled: true,
    zoomType: "xy",
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Requisição de patrimonios"
    },
    subtitles:[{
      text: "Disponivel/Requisição",
      fontSize: 14
    }],
    axisX: {
      logarithmic: true,
      title: "Frequencia (mes/s)",
      minimum: .01,
      suffix: "\u03C9\u2099",
      stripLines: [{
        value: 1,
        label: "Frequencia de requisição",
        labelFontColor: "#808080",
        labelAlign: "near"
      }]
    },
    axisY: {
      lineThickness: 1,
      lineColor: "#6D78AD",
      tickColor: "#6D78AD",
      titleFontColor: "#6D78AD",
      labelFontColor: "#6D78AD"
    },
    axisY2: {
      lineThickness: 1,
      lineColor: "#51CDA0",
      tickColor: "#51CDA0",
      titleFontColor: "#51CDA0",
      labelFontColor: "#51CDA0"
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor:"pointer",
      itemclick: function(e:any) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else{
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [{
      type: "line",
      name: "Requisição de patrimonio",
      showInLegend: true,
      yValueFormatString: "#,##0.00 db",
      xValueFormatString: "\u03C9 = #,##0.00#\u03C9\u2099",
      dataPoints: this.type1DataPoints(this.step)
    },
    {
      type: "line",
      name: "Patrimonio disponiveis",
      color: "#51CDA0",
      showInLegend: true,
      axisYType: "secondary",
      yValueFormatString: "#,##0.00 db",
      xValueFormatString: "\u03C9 = #,##0.00#\u03C9\u2099",
      dataPoints: this.type2DataPoints(.02, this.step)
    }]
  }
 
  type1DataPoints(step:any){
    var dataPoints = [];
    var h;
    for(var w = .01; w < 100 ; w *= step){
      h =  -5 * Math.log(w*w + 1);
      dataPoints.push({x: w, y: h});
    }
    return dataPoints
  }
  
  type2DataPoints(e:any, step:any){
    var dataPoints = [];
    var h;
    for(var w = .01; w < 100 ; w *= step){
      h =  -5 * Math.log(Math.pow((1 - w*w), 2) + 4 *e*e*w*w);
      dataPoints.push({x: w, y: h});
    }
    return dataPoints;
  }	
}     