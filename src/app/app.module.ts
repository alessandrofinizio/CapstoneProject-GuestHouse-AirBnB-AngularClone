import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BodySectionComponent } from './components/body-section/body-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyFavouritesComponent } from './components/my-favourites/my-favourites.component';
import { UploadHostComponent } from './components/upload-host/upload-host.component';
import { YourHostComponent } from './components/your-host/your-host.component';
import { AllProprietiesComponent } from './components/all-proprieties/all-proprieties.component';
import { EditHostComponent } from './components/edit-host/edit-host.component';
import { ViewHostComponent } from './components/view-host/view-host.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSectionComponent,
    BodySectionComponent,
    FooterComponent,
    ArticleComponent,
    ContactComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    MyFavouritesComponent,
    UploadHostComponent,
    YourHostComponent,
    AllProprietiesComponent,
    EditHostComponent,
    ViewHostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
