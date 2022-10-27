import { Component, Input, OnInit, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MapServiceService } from 'src/service/map-service.service';

@Component({
  selector: 'app-bars-container',
  templateUrl: './bars-container.component.html',
  styleUrls: ['./bars-container.component.css']
})
export class BarsContainerComponent implements OnInit {

  constructor( private mapsServices: MapServiceService ){}
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() graficas: any = [];
  @Input() popularidad: any = [];

  

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];




  ngOnInit(): void {
    // this.graficas = this.mapsServices.graficas;
  }




}