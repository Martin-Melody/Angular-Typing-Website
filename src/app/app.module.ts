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
import { NotFoundComponent } from './not-found/not-found.component';

//firebase ts
import { FirebaseTSApp } from "firebasets/firebasetsApp/firebaseTSApp";

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ProfileComponent } from './profile/profile.component';
// Auth service
// import { AuthService } from './shared/auth.service';
// Import canActivate guards
// import { AuthGuard } from './shared/auth.guard';
// import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // {path:'**', component: NotFoundComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'home',component: TypingContainerComponent},
  {path: 'profile', component:ProfileComponent}


];

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
    NotFoundComponent,
    ProfileComponent,
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
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  exports:[
    RouterModule
  ],
  providers: [ParagraphService],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(){
      FirebaseTSApp.init(environment.firebase);
    }

 }
