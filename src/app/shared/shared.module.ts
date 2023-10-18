import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
