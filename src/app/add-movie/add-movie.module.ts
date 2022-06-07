import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMovieRoutingModule } from './add-movie-routing.module';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { FormsModule } from '@angular/forms';

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
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';

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
    FormsModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    MultiSelectModule,
    DropdownModule,
    StyleClassModule,
  ],
})
export class AddMovieModule {}
