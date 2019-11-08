import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginLayoutComponent} from './layouts/login/login.component';
import {MasterLayoutComponent} from './layouts/master/master.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full'},
  { path: 'login' , loadChildren: './login/login.module#LoginModule', component: LoginLayoutComponent },
  { path: 'admin' , loadChildren: './admin/admin.module#AdminModule', component: MasterLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
