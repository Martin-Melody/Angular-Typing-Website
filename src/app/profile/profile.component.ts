import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { timeout } from 'rxjs';
import { ShareSavedQuotesService } from '../services/share-saved-quotes.service';
import { Quotes } from '../models/Quote';
import { AuthService } from '../services/auth.service';
import { doc } from 'firebase/firestore';
import { NgForm } from '@angular/forms';
import { Author } from '../models/Author';

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

  }

  removeQuote(quoteToRemove: Quotes) {
    
    this.sharedQuotes.DeleteQuoteFromFireStore(quoteToRemove);
    for (let i = 0; i < this.savedQuotes.length; i++) {
      if (this.savedQuotes[i].Author == quoteToRemove.Author && this.savedQuotes[i].Quote == quoteToRemove.Quote) {
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

  removeAllQuoteCards(){

    for (let i = 0; i < this.savedQuotes.length; i++) {
      let card = document.getElementById('card');
      let quoteContainer = document.getElementsByClassName('quote_container');
      let cardContainer = document.getElementById('container');

      card?.parentElement?.removeChild(card);
      this.savedQuotes.splice(i,1);
    }

  }

  GetAuthor(author:NgForm)
  {
    let obj = author as object;
    let _author = obj as Author;
    console.log(_author.Author);

    this.removeAllQuoteCards();
    setTimeout(() => {
      
    }, 1000);
    console.log(this.sharedQuotes.searchForAuthor(_author.Author));
    this.savedQuotes = this.sharedQuotes.searchForAuthor(_author.Author);
  }

  
}


