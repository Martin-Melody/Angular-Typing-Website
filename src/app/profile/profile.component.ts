import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { timeout } from 'rxjs';
import { ShareSavedQuotesService } from '../services/share-saved-quotes.service';
import { Quotes } from '../models/Quote';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private sharedQuotes: ShareSavedQuotesService) {}
  returnedQuote:Quotes = {author:'',quote:'',id:0};
  // savedQuotes:any;
  savedQuotes:Array<Quotes> = [];
  

  ngOnInit(): void {

    let quoteObj = this.sharedQuotes.getQuotes();
    for (let i = 0; i < quoteObj.length; i++) {
      
      this.savedQuotes.push(quoteObj[i]);
    }
    


    console.log(this.savedQuotes);

    // this.savedQuotes = this.sharedQuotes.getQuotes();
    // this.savedQuotes.push(this.sharedQuotes.getQuotes());
    // this.savedQuotes.push(this.returnedQuote);
    // this.returnedQuote = this.sharedQuotes.getQuotes();
    
    // console.log("saved quotes: "+this.savedQuotes.author);
    // console.log('here ' + this.savedQuotes.map());
    // // console.log(this.returnedQuote[0].author);
    // console.log(this.savedQuotes?.author);


  }

  removeQuote(quoteToRemove: Quotes) {
    console.log(this.savedQuotes.length);
    for (let i = 0; i < this.savedQuotes.length; i++) {
      if (this.savedQuotes[i].id == quoteToRemove.id) {
        let card = document.getElementById('card');
        let quoteContainer = document.getElementsByClassName('quote_Container');
        let cardConatienr = document.getElementById('container');

        if (quoteContainer.length == 1) {
          card?.parentElement?.removeChild(card);
          this.savedQuotes.splice(i, 1);
        }
        card?.removeChild(quoteContainer[i]);
        this.savedQuotes.splice(i, 1);
      }
    }
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


