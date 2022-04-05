import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { timeout } from 'rxjs';
import { ShareSavedQuotesService } from '../services/share-saved-quotes.service';
import { Quotes } from '../models/Quote';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private sharedQuotes: ShareSavedQuotesService,
    public ProfileComponent: AuthService
  ) {}
  returnedQuote: Quotes = { Author: '', Quote: '',Id: ''};
  // savedQuotes:any;
  test:any;
  savedQuotes: Array<Quotes> = [];
  SavedQuotesEmpty = true;

  ngOnInit(): void {
    this.savedQuotes = this.sharedQuotes.getQuotes();


    console.log(this.savedQuotes);
    //   for (let i = 0; i < quoteObj.length; i++) {
    //     this.savedQuotes.push(quoteObj[i]);
    //   }
    //   this.SavedQuotesEmpty = false;

    // console.log(this.savedQuotes);

    // console.log(this.savedQuotes);

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
    
    this.sharedQuotes.DeleteQuoteFromFireStore(quoteToRemove);
    for (let i = 0; i < this.savedQuotes.length; i++) {
      if (this.savedQuotes[i].Author == quoteToRemove.Author) {
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

  removeAllQuotes(){

  }

  
}


