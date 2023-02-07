import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegisrtationComponent } from './components/regisrtation/regisrtation.component';
import { MainLayoutComponent } from "./main-layout/main-layout.component";

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: "full"},
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'news', component: NewsComponent },
      { path: 'authorization', component: AuthorizationComponent },
      { path: 'registration', component: RegisrtationComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
