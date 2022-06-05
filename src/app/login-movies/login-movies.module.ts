import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMoviesRoutingModule } from './login-movies-routing.module';
import { LoginComponent } from './login/login.component';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginMoviesRoutingModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    HttpClientModule,
    ProgressSpinnerModule,
  ],
})
export class LoginMoviesModule {}
