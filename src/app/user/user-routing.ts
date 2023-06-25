import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'user-view/:id',
    component: UserViewComponent
  }
]
