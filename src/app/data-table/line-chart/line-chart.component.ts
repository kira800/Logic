import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    constructor() { }
    public barChartOptions = {
      
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    
    public barChartType = 'bar';
    public barChartLegend = false;
    public barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

    public barChartData2 = [
      {data: [25, 39, 60, 81, 36, 55, 90], label: 'Series A'},
      {data: [28, 28, 10, 59, 36, 67, 30], label: 'Series B'}
    ];
    ngOnInit() {
    }
  }
