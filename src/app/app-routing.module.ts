import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminContentComponent } from './menu/admin-content/admin-content.component';
import { MenuComponent } from './menu/menu.component';
import { ModeratorContentComponent } from './menu/moderator-content/moderator-content.component';
import { UserContentComponent } from './menu/user-content/user-content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: 'admin',
        component: AdminContentComponent
      },
      {
        path: 'moderator',
        component: ModeratorContentComponent
      },
      {
        path: 'user',
        component: UserContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
