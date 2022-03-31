import { Quote } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Quotes } from "../models/Quote";

@Injectable({
  providedIn: 'root'
})
export class ShareSavedQuotesService {

savedQuotes:any;
quote: Array<Quotes> = [];

  constructor() { }

  addQuotes(_author:string,_quote:string,_id:number)
  {
    
    this.quote.push({author:_author,quote:_quote,id:_id});

    this.savedQuotes =+ this.quote;
  }

  getQuotes()
  {
    return this.quote;
  }
}
