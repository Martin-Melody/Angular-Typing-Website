import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypingContainerComponent } from './typing-container/typing-container.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { ParagraphService } from './services/paragraph.service';
import { CountdownModule} from 'ngx-countdown';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TypingContainerComponent,
    ParagraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ParagraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
