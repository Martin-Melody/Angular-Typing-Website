import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.css'],
})
export class ParagraphsComponent implements OnInit {
  
  public paragraphs = [];

  constructor() {}

  ngOnInit(): void {}
}
