import { HttpClientModule } from '@angular/common/http';
import { NgModule, ViewChildren } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AllProprietiesComponent } from './components/all-proprieties/all-proprieties.component';
import { ArticleComponent } from './components/article/article.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditHostComponent } from './components/edit-host/edit-host.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploadHostComponent } from './components/upload-host/upload-host.component';
import { ViewHostComponent } from './components/view-host/view-host.component';
import { YourHostComponent } from './components/your-host/your-host.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contatti',
    component: ContactComponent
  },
  {
    path:'articoli/:id',
    component: ArticleComponent
  },
  {
    path:'profilo',
    component: ProfileComponent,
    children: [
      {
        path:'aggiungi-proprieta',
        component:UploadHostComponent
      },
      {
        path:'le-tue-proprieta',
        component:YourHostComponent
      },
      {
        path:'visualizza-proprieta/:id',
        component: ViewHostComponent
      },
      {
        path:'modifica-proprieta/:id',
        component: EditHostComponent
      }
    ],
    canActivate: [AuthGuard],
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'annunci',
    component: AllProprietiesComponent
  },
  // {
  //   path: "**",
  //   redirectTo: ""
  // }
];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
