import { ArrayType, Quote, ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Quotes } from '../models/Quote';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { documentId } from 'firebase/firestore';
import { stringify } from 'querystring';
import { delay, empty } from 'rxjs';
import { async } from '@firebase/util';
import { resourceLimits } from 'worker_threads';

@Injectable({
  providedIn: 'root',
})
export class ShareSavedQuotesService {
  dataRef: any;
  DocLenght!: number;
  savedQuotes: any;
  quoteHolder: Array<Quotes> = [];
  quoteToRemoveHolder: Array<Quotes> = [];

  OneQuote:Quotes = {Author:'',Quote:'',Id:''};
  QuoteHolder: Array<Quotes> = [];

  quote: Array<Quotes> = [];
  obj: Array<object> = [];
  objLenght!: number;
  quoteSaved: boolean = false;
  DocID: Array<string> = [];
  private fireStore?: FirebaseTSFirestore;
  constructor() {}

  WriteQuoteToFireStore(_author: string, _quote: string, _id: string){
    this.fireStore = new FirebaseTSFirestore();

    //Get all the Documents from a collection.
    this.fireStore?.getCollection({
      path: ['SavedQuotes'],
      where: [],
      onComplete: (result) => {
        for (let i = 0; i < result.size; i++) {
          // Add The data to a placeholder Object.
         this.quoteHolder.push(result.docs[i].data() as Quotes);
        }
      },
    });

    // I used a time out because the reterival isn't insatnt.
    setTimeout(() => {
      //Loop through all the documents.
      for (let i = 0; i < this.quoteHolder.length; i++) {
        // If the quote you want to save already exists in a document alert user and break.
        if (_quote == this.quoteHolder[i].Quote) {
          alert("you've already added this quote");
          this.quoteSaved = true;
          break;
        } else {
          this.quoteSaved = false;
        }
      }
      // If Quote doesn't exist aleart user and add to database.
      if (this.quoteSaved == false) {
        alert('Added your Quote.');
        this.AddQuoteToFireStore(_author, _quote, _id);
      }
    }, 1000);
  }

  // Add the quote to the database.
  AddQuoteToFireStore(_author: string, _quote: string, _id: string) {
    this.fireStore = new FirebaseTSFirestore();
    this.fireStore.create({
      path: ['SavedQuotes'],
      data: {
        Author: _author,
        Quote: _quote,
        Id: _id,
      },
      onComplete: (documentId) => {},
      onFail: (err) => {
        alert('Failed to Save Quote');
      },
    });
  }

  // Delete from database.
  DeleteQuoteFromFireStore(quoteToRemove: Quotes) {
  
   const a = this.GetDocumentFromFireStore(quoteToRemove);
   
setTimeout(() => {
  

    console.log('Document Id : ' + this.DocID[0]);
    this.fireStore = new FirebaseTSFirestore();
    this.fireStore.delete({
      path: ['SavedQuotes',this.DocID[0]],
      onComplete: () => {
        alert('Quote Deleted');
      },
      onFail: (err) => {
        alert('Quote not Deleted');
      },
    });
    }, 1000);
  }

  GetDocumentFromFireStore(quoteToRemove:Quotes):string[]{

    this.fireStore = new FirebaseTSFirestore();
    this.fireStore.getCollection(
      {
        path:['SavedQuotes'],
        where:[],
        onComplete: (result) => {
          for (let i = 0; i < result.size; i++) {
           this.OneQuote = result.docs[i].data() as Quotes; 

           if (this.OneQuote.Id == quoteToRemove.Id) {
             var random = this.DocID[0] = result.docs[i].id;
           }
          }
        },
        onFail: (err) => {}
      }
    ) 
    return this.DocID
  }

 searchForAuthor(author:string):Quotes[]{
   

   //Get all the Documents from a collection.
   this.fireStore?.getCollection({
     path: ['SavedQuotes'],
     where: [],
     onComplete: (result) => {
       for (let i = 0; i < result.size; i++) {
         this.OneQuote = result.docs[i].data() as Quotes;

         if (this.OneQuote.Author == author) {
           this.quote.push(this.OneQuote);
         }
       }
     },
   });
   setTimeout(() => {}, 1000);
   return this.quote;
 }

  getQuotes(): Quotes[] {

    this.quote = [];
    this.fireStore = new FirebaseTSFirestore();

    //Get all the Documents from a collection.
    this.fireStore?.getCollection({
      path: ['SavedQuotes'],
      where: [],
      onComplete: (result) => {
        for (let i = 0; i < result.size; i++) {
          // Add The data to a placeholder Object.
          this.quote.push(result.docs[i].data() as Quotes);
        }
      },
    });

    setTimeout(() => {}, 1000);
    return this.quote;
  }

}
