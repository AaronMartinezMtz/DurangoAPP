import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarsContainerComponent } from './bars-container/bars-container.component';
import { NgChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    BarsContainerComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BarsContainerComponent
  ],
})
export class UiModule { }
