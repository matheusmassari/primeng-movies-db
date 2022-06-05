import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesDashboardRoutingModule } from './movies-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MoviesDashboardRoutingModule
  ]
})
export class MoviesDashboardModule { }
