import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypingContainerComponent } from './typing-container/typing-container.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { ParagraphService } from './services/paragraph.service';
import { CountdownModule} from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    TypingContainerComponent,
    ParagraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [ParagraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
