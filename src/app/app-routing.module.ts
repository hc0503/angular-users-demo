import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
	{ path: '', redirectTo: 'users', pathMatch: 'full' },
	{ path: 'users', component: UserListComponent },
	{ path: 'users/add', component: AddUserComponent },
	{ path: 'users/:id', component: EditUserComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
 })

 export class AppRoutingModule {}