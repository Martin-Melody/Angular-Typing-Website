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
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DisplaySavedQuotesComponent } from './display-saved-quotes/display-saved-quotes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    TypingContainerComponent,
    ParagraphsComponent,
    TypingResultsComponent,
    DisplaySavedQuotesComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
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
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [ParagraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
