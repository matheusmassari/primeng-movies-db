import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<any>('http://localhost:3000/movies/');
  }

  getSingleMovie(id: number) {
    return this.http.get<any>('http://localhost:3000/movies/' + id);
  }

  create(data: any) {
    return this.http.post<any>('http://localhost:3000/movies/', data);
  }

  update(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/movies/' + id, data);
  }

  delete(id: number) {
    return this.http.delete<any>('http://localhost:3000/movies/' + id);
  }
}
