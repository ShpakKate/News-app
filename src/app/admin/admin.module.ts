import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {RouterModule} from "@angular/router";
import {PagesComponent} from "./components/pages/pages.component";
import {NewNewsComponent} from "./components/new-news/new-news.component";
import {MaterialModule} from "../../shared/material/material.module";
import {MyAuthGuard} from "../../shared/guards/my-auth-guard.service";

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/new-news', pathMatch: "full"},
          {path: 'pages', component: PagesComponent},
          {path: 'new-news', canActivate: [MyAuthGuard], component: NewNewsComponent}
        ]
      },
    ]),
    MaterialModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
