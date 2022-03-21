import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  CountdownComponent,
  CountdownEvent,
  CountdownTimer,
} from 'ngx-countdown';
import { ConnectableObservable, timer } from 'rxjs';
import { ParagraphService } from '../services/paragraph.service';

export class Quote {
  public quote!: string;
}


@Component({
  selector: 'app-typing-container',
  templateUrl: './typing-container.component.html',
  styleUrls: ['./typing-container.component.css'],
})
export class TypingContainerComponent implements OnInit {
  quote!: Quote[];

  URL: string = 'https://api.quotable.io/random?minLength=100&maxLength=140';

  public paragraphs = [] as any;
  public charIndex = 0;
  public mistakes = 0;

  constructor(
    private _paragraphService: ParagraphService,
    private httpClient: HttpClient
  ) {}

  @ViewChild('countdown') counter!: CountdownComponent;

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this.httpClient.get<any>(this.URL).subscribe((response) => {
      this.quote = response;
      console.log(response);
      this.paragraphs = response.content.split('');
    });
  }

  restartGame() {
    location.reload();
  }

  focusInput() {
    //get input field
    const intputTag = document.querySelector<HTMLInputElement>(
      'input[name="textInput"]'
    );
    intputTag?.focus();
  }

  random(event: any) {
    console.log(event.target.value);
  }

  initTyping(InputValue: any) {
    let input = InputValue.target.value;

    console.log(input);
    // Get all the characters in the text box and put them in an arry
    const characters = document.querySelectorAll<HTMLSpanElement>(
      'span[name="charSpan"]'
    );

    // Get the cpm element
    const cpmTag = document.querySelector<HTMLSpanElement>(
      'span[name="cpmSpan"]'
    );

    //get input field
    const intputTag = document.querySelector<HTMLInputElement>(
      'input[name="textInput"]'
    );

    //Get wpm element
    const wpmTag = document.querySelector<HTMLSpanElement>(
      'span[name="wpmSpan"]'
    );

    // Get the mistakes element
    const mistakesTag = document.querySelector<HTMLSpanElement>(
      'span[name="mistakeSpan"]'
    );

    // Get the timer element

    // Letting typedChar = the chracter that is entered in the input
    let typedChar = input.split('')[this.charIndex];
    if (this.charIndex < characters.length && this.counter.left / 1000 > 0) {
      // check if it is null
      if (typedChar == null) {
        //If it is decrease the index because a backspace has been hit and remove the classes added to the characters
        this.charIndex--;

        // Check if the word was incorrec and then adds a was-incorrect class;
        if (characters[this.charIndex].classList.contains('incorrect')) {
          characters[this.charIndex].classList.remove('incorrect');
          // characters[this.charIndex].classList.add('was-Incorrect');
        }
        characters[this.charIndex].classList.remove('correct');
      } else {
        // If the correct charactes is entered add the correct class and vise versa for incorrect and increase the mistakes counter
        if (characters[this.charIndex].textContent === typedChar) {
          characters[this.charIndex].classList.add('correct');
        } else {
          this.mistakes++;
          characters[this.charIndex].classList.add('incorrect');
        }
        // Then incrase the character index and update the mistakes counter if needed.
        this.charIndex++;

        // This just check to see if the tag is null.

        let wpm = Math.round(
          ((this.charIndex - this.mistakes) /
            5 /
            (60 - this.counter.left / 1000)) *
            60
        );

        if (!cpmTag || !wpmTag) {
          return;
        } else {
          cpmTag.innerHTML = (this.charIndex - this.mistakes).toString();
          wpmTag.innerHTML = wpm.toString();
        }
      }
    } else {
      if (!intputTag) {
      } else {
        intputTag.value = '';
      }
    }

    // When you reach the end of the quote the timer stops.
    if (this.charIndex >= this.paragraphs.length) {
      this.counter.stop();
    }

    // For each character in the array we want to remove the active tag and then just added it to the first character in the array.
    characters.forEach((span) => span.classList.remove('active'));
    characters[this.charIndex].classList.add('active');
  }

  StartCountdown() {
    this.counter.resume();
  }
  notify = '';

  timesUp(e: CountdownEvent) {
    this.notify = e.action.toUpperCase();
    if (e.action === 'done') {
    } else {
      console.log('notify', e);
    }
  }
}
