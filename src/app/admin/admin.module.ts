import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';

import {MaterialModule} from "../../shared/material/material.module";
import {MyAuthGuard} from "../../shared/guards/my-auth-guard.service";

import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {PagesComponent} from "./components/pages/pages.component";
import {NewNewsComponent} from "./components/new-news/new-news.component";
import {EditingUserDataComponent} from './components/editing-user-data/editing-user-data.component';
import {DeletingUserComponent} from './components/deleting-user/deleting-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ListOfUsersComponent} from './components/list-of-users/list-of-users.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    EditingUserDataComponent,
    DeletingUserComponent,
    PagesComponent,
    NewNewsComponent,
    ListOfUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/new-news', pathMatch: "full"},
          {path: 'pages', component: PagesComponent},
          {path: 'list', component: ListOfUsersComponent},
          {path: 'new-news', canActivate: [MyAuthGuard], component: NewNewsComponent}
        ]
      },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
