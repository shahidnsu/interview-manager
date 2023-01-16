import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-user-line-chart',
  templateUrl: './user-line-chart.component.html',
  styleUrls: ['./user-line-chart.component.css'],
})
export class UserLineChartComponent {
  @Input() febBatchNumbers: any;
  @Input() uniqueMonths: string[] = [];
  @Input() janBatchNumbers: any;
  @Input() marBatchNumbers: any;
  //charData: string[] = [this.febBatchNumbers.toString()];
  public chart: any;
  public LineChart: any;
  



  createPieChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: [...this.uniqueMonths],
        datasets: [
          {
            label: 'Number of students',

            data: [
              this.febBatchNumbers.toString(),
              this.janBatchNumbers.toString(),
              this.marBatchNumbers.toString(),
              this.janBatchNumbers.toString()
            ],

            backgroundColor: ['#58508d', '#ff6361', '#003f5c', '#ffa600'],
          },
        ],
      },
      options: {
        aspectRatio: 1,

        scales: {
          y: {
            display: false,
            grid: {
              display: false,
            },
          },

          x: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  createLineChart() {
    this.LineChart = new Chart('MyLineChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        labels: [...this.uniqueMonths],
        datasets: [
          {
            label: 'Number of students per Month',
            data: [
              this.febBatchNumbers.toString(),
              this.janBatchNumbers.toString(),
              this.marBatchNumbers.toString(),
              '10',
            ],

            fill: false,

            backgroundColor: ['#58508b', '#ff6361', '#003f5c', '#ffa600'],
            tension: 0.2,
          },
        ],
      },
      options: {
        aspectRatio: 1,

        scales: {
          y: {
            grid: {
              display: true,
            },
          },

          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
  
  ngOnInit(): void {
    this.createPieChart();
    this.createLineChart();
  }
}
