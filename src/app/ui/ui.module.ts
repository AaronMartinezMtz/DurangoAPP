import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarsContainerComponent } from './bars-container/bars-container.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    BarsContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BarsContainerComponent
  ],
})
export class UiModule { }
