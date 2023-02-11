import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegisrtationComponent } from './components/regisrtation/regisrtation.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MyAuthGuard } from '../shared/guards/my-auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [MyAuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: 'user',
    canActivate: [MyAuthGuard],
    loadChildren: () =>
      import('./user-layout/user/user.module').then(mod => mod.UserModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'authorization', pathMatch: 'full' },
      { path: 'authorization', component: AuthorizationComponent },
      { path: 'registration', component: RegisrtationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
