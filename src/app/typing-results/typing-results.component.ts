import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Chart, registerables } from 'chart.js';
import { timeInterval } from 'rxjs';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';


@Component({
  selector: 'app-typing-results',
  templateUrl: './typing-results.component.html',
  styleUrls: ['./typing-results.component.css'],
})
export class TypingResultsComponent implements OnInit {
  constructor(private shared: SharedService) {}

  wpm = 0;
  accuracy = 0;
  timeLeft = 0;
  author = '';
  MistakeTimeStamp = [{}];
  WPMarray: number[] = [];
  testResults: any;
  raw = 0;
  TimeIncrements: number[] = [1,2,3,4,5,6,7,8];
  wholeNoTime = 0;

  TestResults = [
    { time: '1', _wpm: '30' },
    { time: '2', _wpm: '60' },
    { time: '3', _wpm: '80' },
    { time: '4', _wpm: '100' },
    { time: '5', _wpm: '102' },
    { time: '6', _wpm: '110' },
  ];

  chart: any;

  ngOnInit(): void {
    this.chart = document.getElementById('Test_Graph');
    Chart.register(...registerables);
    

    this.testResults = this.shared.GetTestResults();
    this.wpm = this.testResults[0].WPM;
    this.accuracy = this.testResults[0].Accuracy;
    this.timeLeft = 60 - this.testResults[0].TimeLeft;
    this.author = this.testResults[0].Author;
    this.MistakeTimeStamp = this.testResults[0].MistakesTimeStamp;
    this.raw = this.testResults[0].Raw;
    this.WPMarray = this.testResults[0].WPMArray;

    for (let i = 0; i < this.timeLeft; i++) {
      this.TimeIncrements[i] = i + 1;
      console.log(this.TimeIncrements[i]);
    }
    console.log(this.TimeIncrements);
    console.log(this.timeLeft);

this.loadChart();

  }

  loadChart(): void {
    new Chart(this.chart, {
      type: 'line',
      data: {
        labels: this.TimeIncrements,
        datasets: [
          {
            label: 'WPM',
            data: this.WPMarray,
            tension: 0.4,
            borderColor: '#d6d2bc',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false,
      },
    });
  }

  //  new Chart(this.chart, {
  //    type: 'bar',
  //    data: {
  //      datasets: [
  //        {
  //          data: [
  //            { id: 'Sales', nested: { value: 1500 } },
  //            { id: 'Purchases', nested: { value: 500 } },
  //          ],
  //        },
  //      ],
  //    },
  //    options: {
  //      responsive:true,
  //      maintainAspectRatio:false,
  //      parsing: {
  //        xAxisKey: 'id',
  //        yAxisKey: 'nested.value',
  //      },
  //    },
  //  });
}
