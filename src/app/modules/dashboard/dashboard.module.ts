import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BoxVideoComponent } from './box-video/box-video.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, BoxVideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
