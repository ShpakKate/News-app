import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {MaterialModule} from "../../../shared/material/material.module";
import {MyAuthGuard} from "../../../shared/guards/my-auth-guard.service";

import {UserLayoutComponent} from "../user-layout.component";
import {HomeComponent} from "../../components/home/home.component";
import {NewsComponent} from "../../components/news/news.component";
import {AboutComponent} from "../../components/about/about.component";
import {NewNewsComponent} from "../../components/new-news/new-news.component";

@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: UserLayoutComponent, children: [
          {path: '', redirectTo: '/user/home', pathMatch: "full"},
          {path: 'home', canActivate: [MyAuthGuard], component: HomeComponent},
          {path: 'news', canActivate: [MyAuthGuard], component: NewsComponent},
          {path: 'new-news', canActivate: [MyAuthGuard], component: NewNewsComponent},
          {path: 'about', canActivate: [MyAuthGuard], component: AboutComponent},
        ]}
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
