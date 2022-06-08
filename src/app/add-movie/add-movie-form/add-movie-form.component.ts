import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Genre {
  name: string;
}

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss'],
})
export class AddMovieFormComponent implements OnInit {
  constructor(
    private router: Router,
    private _arouter: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder
  ) {}

  movieForm!: FormGroup;
  success: boolean = false;
  btnLabel: string = 'Cadastrar';

  id!: number;
  genres!: Genre[];
  selectedGenre!: Genre;

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      original_title: ['', Validators.required],
      overview: ['', Validators.required],
      rating: ['', Validators.required],
      genre: [this.selectedGenre, Validators.required],
      image_url: ['', Validators.required],
    });

    this.genres = [
      {
        name: 'Sci-fi',
      },
      {
        name: 'Horror',
      },
      {
        name: 'Drama',
      },
      {
        name: 'Romance',
      },
      {
        name: 'Animation',
      },
      {
        name: 'Fantasy',
      },
      {
        name: 'Mystery',
      },
      {
        name: 'Thriller',
      },
      {
        name: 'Action',
      },
      {
        name: 'Crime',
      },
      {
        name: 'Comedy',
      },
    ];

    this._arouter.paramMap.subscribe((params) => {
      const empId = params.get('id');
      if (empId) {
        this.id = +empId;
        this.getSingleMovieInfo(+empId);
        this.btnLabel = 'Atualizar';
      }
    });
  }

  addMovie() {
    console.log(this.movieForm.value);
    if (this.movieForm.valid) {
      this.api.create(this.movieForm.value).subscribe({
        next: (res) => {
          this.success = true;
          this.movieForm.reset();
        },
        error: () => alert('Houve um erro ao adicionar filme.'),
      });
    }
  }

  updateMovie() {
    console.log(this.movieForm.value);
    this.api.update(this.movieForm.value, this.id).subscribe({
      next: (res) => {
        this.success = true;
        this.movieForm.reset();
      },
      error: () => alert('Erro ao atualizar pizza :('),
    });
  }

  goToPage(adress: string) {
    this.router.navigate([`${adress}`]);
  }

  newForm() {
    this.success = false;
  }

  editMovieInfo(editInfo: any) {
    this.movieForm.patchValue({
      original_title: editInfo.original_title,
      image_url: editInfo.image_url,
      overview: editInfo.overview,
      rating: editInfo.rating,
      genre: editInfo.genre,
    });
  }

  getSingleMovieInfo(id: number) {
    this.api.getSingleMovie(id).subscribe({
      next: (movieInfo) => {
        console.log(movieInfo);
        this.editMovieInfo(movieInfo);
      },
      error: () => alert('Houve um erro ao criar produto'),
    });
  }
}
