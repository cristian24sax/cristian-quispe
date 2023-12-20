import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

@Injectable({ providedIn: 'root' })
export class ComunicacionService {
  filteredMoviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<
    Movie[]
  >([]);

  actualizarPeliculasFiltradas(peliculasFiltradas: Movie[]) {
    this.filteredMoviesSubject.next(peliculasFiltradas);
  }
}
