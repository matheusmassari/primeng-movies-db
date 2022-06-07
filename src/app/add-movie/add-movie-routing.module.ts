import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';

const routes: Routes = [
  {path: '', component: AddMovieFormComponent},
  { path: ':id', component: AddMovieFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMovieRoutingModule { }
