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
  WPMArray: number[] = [];
  raw = 0;

  constructor() { }

  SetTestResults(_wpm= 0,_accruacy = 0,_timeLeft = 0,_author = "",_mistakesTimeStap = [{}],_raw = 0,_WPMArray:number[] = [])
  {
    this.WPM = _wpm;
    this.accuracy = _accruacy;
    this.timeLeft = _timeLeft;
    this.author = _author;
    this.MistakesTimeStamp = _mistakesTimeStap;
    this.raw = _raw;
    this.WPMArray = _WPMArray;

     this.userTestStart = [
      {'WPM': this.WPM,'Accuracy': this.accuracy,'TimeLeft': this.timeLeft,"Author":this.author,"MistakesTimeStamp":this.MistakesTimeStamp,"Raw":this.raw,"WPMArray":this.WPMArray}
    ]

  }

  GetTestResults()
  {
    return this.userTestStart;
  }

}
