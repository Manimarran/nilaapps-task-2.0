import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = ['sagar', 'laxman', 'nimesh', 'vishal', 'nilam'];
  // public barChartType = 'bar';
  // public barChartLegend = false;
  // public barChartData = [
  //   {data: [65, 59, 80, 60, 50], label: 'Remote', backgroundColor: "green"},
  //   {data: [28, 48, 40, 81], label: 'Visit', backgroundColor: "green"},
  //   {data: [45,77,64], label: 'Visit', backgroundColor: "green"},
  //   {data: [55,88, ''], label: 'Visit', backgroundColor: "yellow"},
  //   {data: ['',55,''], label: 'Visit', backgroundColor: "yellow"},
  //   {data: ['',55, ''], label: 'Visit', backgroundColor: "yellow"},
  //   {data: ['',55, ''], label: 'Visit', backgroundColor: "yellow"},
  //   {data: ['',55, ''], label: 'Visit', backgroundColor: "yellow"},
  //   {data: ['',55, ''], label: 'Visit', backgroundColor: "yellow"},
  // ];

  title = 'ng2-charts-demo';

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
    datasets: [
    {data: [65, 59, 80, 60, 50], label: 'Completed', backgroundColor: "#77c977"},
    {data: [28, 48, 40, 81], label: 'Pending', backgroundColor: "#e9ecef"},
    {data: [45,77,64], label: 'Completed', backgroundColor: "#77c977"},
    {data: [55,88, null], label: 'Completed', backgroundColor: "#77c977"},
    {data: [null,55,null], label: 'Pending', backgroundColor: "#e9ecef"},
    {data: [null,67, null], label: 'Pending', backgroundColor: "#e9ecef"},
    {data: [null,33, null], label: 'Pending', backgroundColor: "#e9ecef"},
    {data: [null,87, null], label: 'Pending', backgroundColor: "#e9ecef"},
    {data: [null,49, null], label: 'Pending', backgroundColor: "#e9ecef"},
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
      },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          callback: function(value, index, ticks) {
            return value + '%';
          }  ,
          display: true,
          stepSize: 25,
          
        },
        min: 0,
      },
      
    },
    aspectRatio: 3
  };

  constructor() {
  }
}

