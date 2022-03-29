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
import { TypingResultsComponent } from './typing-results/typing-results.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    TypingContainerComponent,
    ParagraphsComponent,
    TypingResultsComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ParagraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
