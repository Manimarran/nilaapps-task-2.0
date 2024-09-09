import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '1/7',
      '8/7',
      '15/7',
      '22/7',
      '29/7',
      '5/8',
      '12/8',
      '19/8',
      '26/8',
      '2/9',
      '9/9',
      '16/9',
      '23/9',
      '30/9',
      '21/10'
    ],
    datasets: [
      {
        data: [ 65, 59, 32, 81, 23, 55, 40, 32, 81, 23, 55, 40, 29, 93 ],
        label: '',
        fill: false,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      }
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
          
        },
        title:{
          display: true,
          text: 'Weeks',
          font:function (ctx, options) {
            return {
              weight: 'normal',
              color: '#FF0000',
              family: 'math'
            };
          },
        }

      },
      y: {
        grid: {
          display: false,
        },
        title:{
          display: true,
          text: 'Attendance',
          font:function (ctx, options) {
            return {
              weight: 'bold',
              color: '#FF0000',
              family: 'math'
            };
          },
        },
        ticks: {
          callback: function(value, index, ticks) {
            return value + '%';
          }  ,
          display: true,
          stepSize: 25
        },
        min: 0,
        
        
      },
    },
    aspectRatio: 3.5
    
  };
  public lineChartLegend = false;

  constructor() {
  }

  ngOnInit() {
  }
}
