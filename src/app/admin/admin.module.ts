import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { RouterModule} from "@angular/router";
import { PagesComponent } from "./pages/pages.component";
import { NewNewsComponent } from "./new-news/new-news.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/new-news', pathMatch: "full"},
          {path: 'pages', component: PagesComponent},
          {path: 'new-news', component: NewNewsComponent},
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
