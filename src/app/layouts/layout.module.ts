import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './master/master.component';
import { LoginLayoutComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MasterLayoutComponent, LoginLayoutComponent],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    MasterLayoutComponent, LoginLayoutComponent
  ]
})
export class LayoutModule { }
