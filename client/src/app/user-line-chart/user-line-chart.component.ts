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
              '5',
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(60,99,10)',
            ],
          },
          // {
          //   label: 'Feb',
          //   data: ['50'],
          //   backgroundColor: 'black',
          // },
          //
          // {
          //   label: 'March',
          //   data: [this.febBatchNumbers.toString()],
          //   backgroundColor: 'gray',
          // },
          // {
          //   label: 'April',
          //   data: ['10'],
          //   backgroundColor: 'white',
          // },
        ],
      },
      options: {
        aspectRatio: 4.5,

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
  ngOnInit(): void {
    this.createPieChart();
  }
}
