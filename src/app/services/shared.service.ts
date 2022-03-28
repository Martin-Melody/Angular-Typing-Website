import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  WPM = 0;
  accuracy = 0;
  timeLeft = 0;
  author = '';
  MistakesTimeStamp = [{}]
  userTestStart = [{}];

  constructor() { }

  SetTestResults(_wpm= 0,_accruacy = 0,_timeLeft = 0,_author = "",_mistakesTimeStap = [{}])
  {
    this.WPM = _wpm;
    this.accuracy = _accruacy;
    this.timeLeft = _timeLeft;
    this.author = _author;
    this.MistakesTimeStamp = _mistakesTimeStap;

     this.userTestStart = [
      {'WPM': this.WPM,'Accuracy': this.accuracy,'TimeLeft': this.timeLeft,"Author":this.author,"MistakesTimeStamp":this.MistakesTimeStamp}
    ]

  }

  GetTestResults()
  {
    return this.userTestStart;
  }

}
