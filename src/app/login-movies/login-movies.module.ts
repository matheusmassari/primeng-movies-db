import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMoviesRoutingModule } from './login-movies-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, LoginMoviesRoutingModule],
})
export class LoginMoviesModule {}
