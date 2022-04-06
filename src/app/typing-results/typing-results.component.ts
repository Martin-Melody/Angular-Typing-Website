import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Chart, registerables } from 'chart.js';
import { timeInterval } from 'rxjs';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { TestResults } from '../models/TestResults';

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
  ActualWPMArray: Array<number> = [];
  testResults: any;
  raw = 0;
  TimeIncrements: number[] = [];
  wholeNoTime = 0;

  TestResults: any;

  chart: any;

  ngOnInit(): void {
    this.chart = document.getElementById('Test_Graph');
    Chart.register(...registerables);

    this.testResults = this.shared.GetTestResults() as TestResults[];
    this.accuracy = this.testResults[0].Accuracy;
    this.timeLeft = 60 - this.testResults[0].TimeLeft;
    this.author = this.testResults[0].Author;
    this.MistakeTimeStamp = this.testResults[0].MistakesTimeStamp;
    this.raw = this.testResults[0].Raw;
    this.WPMarray = this.testResults[0].WPMArray;
    this.wpm = this.WPMarray[this.WPMarray.length - 1];

    // Getting the time increments for the graph
    for (let i = 0; i < this.timeLeft; i++) {
      this.TimeIncrements[i] = i + 1;
    }

    let count = 0;
    let number = 0;
    console.log(this.WPMarray[0]);
    // Getting the wpm's at the time increments.
    for (let i = 0; i < this.WPMarray.length; i++) {
      count = this.WPMarray.length / this.timeLeft;

      if (
        i % this.timeLeft == 0 &&
        this.ActualWPMArray.length <= this.timeLeft
      ) {
        if (isNaN(this.WPMarray[i])) {
          this.ActualWPMArray.push(number);
        }
        else{
        this.ActualWPMArray.push(this.WPMarray[i]);
        }
      }
    }

    // Removing the last two wpm in the ActualwpmArray and replacing it with the last recorded wpm
    // So the graph displays the right last wpm.
    console.log(this.ActualWPMArray);
    this.ActualWPMArray.pop();
    this.ActualWPMArray.pop();
    console.log(this.ActualWPMArray);
    this.ActualWPMArray.push(this.wpm);
    console.log(this.ActualWPMArray);

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
            fill: true,
            data: this.ActualWPMArray,
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
