import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PagesComponent } from './pages/pages.component';
import { NewNewsComponent } from './new-news/new-news.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegisrtationComponent } from './regisrtation/regisrtation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'new-news', component: NewNewsComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegisrtationComponent },
  { path: '**', redirectTo: "/" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
