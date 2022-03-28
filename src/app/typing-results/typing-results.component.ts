import { Component, OnInit } from '@angular/core';
import { SharedService } from "../services/shared.service";

@Component({
  selector: 'app-typing-results',
  templateUrl: './typing-results.component.html',
  styleUrls: ['./typing-results.component.css']
})
export class TypingResultsComponent implements OnInit {

  constructor(private shared:SharedService) { }

  wpm = 0;
  accuracy = 0;
  timeLeft = 0;
  author = "";
  MistakeTimeStamp = [{}];
  testResults:any;


  ngOnInit(): void {
    console.log(this.shared.GetTestResults());
    this.testResults = this.shared.GetTestResults();
    this.wpm = this.testResults[0].WPM
    this.accuracy = this.testResults[0].Accuracy;
    this.timeLeft = this.testResults[0].TimeLeft;
    this.author = this.testResults[0].Author;
    this.MistakeTimeStamp = this.testResults[0].MistakesTimeStamp;
  }

}
