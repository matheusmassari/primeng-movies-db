import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  // Navbar e Tabs //
  items: MenuItem[] = [];
  tabItems: MenuItem[] = [];
  activeTab!: MenuItem;

  // Lista de filmes total e Favoritos
  moviesArray = [];
  moviesFavorites: any = [];

  //Filtro sobre todos os filmes
  searchMovie: any;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Adicionar Filme',
        icon: 'pi pi-fw pi-plus',
        command: () => this.router.navigate(['add-movie']),
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.router.navigate(['login']),
      },
    ];
    this.tabItems = [
      {
        label: 'Lista Principal',
        icon: 'pi pi-list',
        command: () => (this.activeTab = this.tabItems[0]),
      },
      {
        label: 'Filmes Favoritos',
        icon: 'pi pi-star-fill',
        command: () => (this.activeTab = this.tabItems[1]),
      },
    ];
    this.activeTab = this.tabItems[0]
    this.getAllMovies();
  }

  getAllMovies() {
    this.api.getAllMovies().subscribe({
      next: (res) => {
        this.moviesArray = res;
      },
      error: () => alert('Erro ao buscar lista de filmes'),
    });
  }

  deleteMovie(id: number) {
    this.api.delete(id).subscribe({
      next: () => {
        alert('Filme deletado com sucesso.');
        this.getAllMovies();
      },
      error: () => alert('Houve algum erro ao deletar filmes.'),
    });
  }

  editMovie(pizzaId: number) {
    this.router.navigate(['add-movie', pizzaId]);
  }

  addToFavorites(id: any) {
    let existsMovie: any = this.moviesFavorites.find(
      (singleMovie: any) => singleMovie.id === id
    );
    if (existsMovie) {
      existsMovie.isFavorite = false;
      let newFavorites = this.moviesFavorites.filter(
        (element: any) => element.id !== id
      );
      this.moviesFavorites = newFavorites;
    } else {
      let tempMovie: any = this.moviesArray.find(
        (singleMovie: any) => singleMovie.id === id
      );
      tempMovie.isFavorite = true;
      this.moviesFavorites.push(tempMovie);
    }
    // console.log(this.moviesFavorites);
  }
}
