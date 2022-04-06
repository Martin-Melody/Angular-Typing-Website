import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormBuilder, FormControl } from "@angular/forms";
import { NgForm } from "@angular/forms";
import { Author } from '../models/Author';
import { Quotes } from '../models/Quote';
import { ShareSavedQuotesService } from "../services/share-saved-quotes.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(private sharedQutoes:ShareSavedQuotesService) {
  }

  ngOnInit(): void {}

  GetAuthor(author:NgForm){

    

  }
}
