import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  savedQuotes : any;

  constructor() {
    this.savedQuotes = [
    { author: 'shakspear', quote: 'meow mix meow mix please deliver' },
    { author: 'Nelson Mandela', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
    { author: 'The way to get started is to quit talking and begin doing.', quote: 'Walt Disney' },
    { author: 'Steve Jobs', quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." },
    { author: 'Eleanor Roosevelt', quote: 'If life were predictable it would cease to be life, and be without flavor.' }
  ];
  }

  ngOnInit(): void {}
}
