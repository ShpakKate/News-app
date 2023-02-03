import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from "@angular/common/http";

import { AdminModule } from "./admin/admin.module";
import { AuthService } from "../shared/services/auth.service";
import { PagesComponent } from './admin/pages/pages.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NewNewsComponent } from './admin/new-news/new-news.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegisrtationComponent } from './regisrtation/regisrtation.component';
import { MainLayoutComponent } from "../shared/components/main-layout/main-layout.component";

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
        MainLayoutComponent,
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
        HttpClientModule,
    ],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule { }
