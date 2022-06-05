import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-movies/login-movies.module').then(
        (m) => m.LoginMoviesModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./movies-dashboard/movies-dashboard.module').then(
        (m) => m.MoviesDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
