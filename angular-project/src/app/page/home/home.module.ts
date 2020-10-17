import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.container';
import { ViewTopComponent } from './view-top/view-top.component';


@NgModule({
  declarations: [HomeComponent, ViewTopComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
