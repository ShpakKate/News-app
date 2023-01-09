import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewNewsComponent } from './new-news/new-news.component';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'new-news', component: NewNewsComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    ModalComponent,
    NewNewsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }