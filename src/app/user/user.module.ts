import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user-routing';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FilterSearchPipe } from '../shared/filter-search.pipe';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserComponent,FilterSearchPipe, UserAddComponent, UserViewComponent,],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(UserRoutes),
  ]
})
export class UserModule { }
