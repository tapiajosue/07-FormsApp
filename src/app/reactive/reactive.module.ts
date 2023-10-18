import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import {
  DynamicPageComponent,
} from './pages/dynamic-page/dynamic-page.component';
import {
  SwitchesPageComponent,
} from './pages/switches-page/switches-page.component';
import { ReactiveRoutingModule } from './reactive-routing.module';

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
    // si usamos forms debemos importarlo al modulo donde se usara
  ]
})
export class ReactiveModule { }
