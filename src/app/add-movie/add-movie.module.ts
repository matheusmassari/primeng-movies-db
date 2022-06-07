import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMovieRoutingModule } from './add-movie-routing.module';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [AddMovieFormComponent],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    MultiSelectModule,
  ],
})
export class AddMovieModule {}
