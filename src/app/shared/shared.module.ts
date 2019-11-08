import { NgModule } from '@angular/core';
import {HeaderComponent} from '../master/header/header.component';
import {SidebarComponent} from '../master/sidebar/sidebar.component';
import {FooterComponent} from '../master/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
