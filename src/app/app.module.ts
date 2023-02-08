import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import {AdminModule} from "./admin/admin.module";
import {MaterialModule} from '../shared/material/material.module';
import {UserModule} from "./user-layout/user/user.module";

import {PagesComponent} from './admin/components/pages/pages.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {NewsComponent} from './components/news/news.component';
import {NewNewsComponent} from './admin/components/new-news/new-news.component';
import {NewsitemComponent} from './components/newsitem/newsitem.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {RegisrtationComponent} from './components/regisrtation/regisrtation.component';
import {MainLayoutComponent} from "./main-layout/main-layout.component";

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        HomeComponent,
        AboutComponent,
        NewsComponent,
        NewNewsComponent,
        NewsitemComponent,
        AuthorizationComponent,
        RegisrtationComponent,
        MainLayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        MaterialModule,
        AdminModule,
        UserModule,
        HttpClientModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
