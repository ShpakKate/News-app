import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegisrtationComponent } from './regisrtation/regisrtation.component';
import { MainLayoutComponent } from "../shared/components/main-layout/main-layout.component";

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
