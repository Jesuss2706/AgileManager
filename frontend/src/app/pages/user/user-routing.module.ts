import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'create', component: UserManagerComponent},
  {path: 'update/:id', component: UserManagerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
