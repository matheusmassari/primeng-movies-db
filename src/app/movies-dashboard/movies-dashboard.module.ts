import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesDashboardRoutingModule } from './movies-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MoviesDashboardRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    FormsModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    TabMenuModule,
    ToastModule,
    ChipModule,
  ],
  providers: [MessageService],
})
export class MoviesDashboardModule {}
