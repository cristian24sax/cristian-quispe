import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies.interface';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { MoviesService } from 'src/app/services/movies.services';
import { SearchService } from 'src/app/services/search.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  fieldName: string = '';
  fieldDescription: string = '';
  genres: string[] = [];
  movies?: Movie[];
  filteredMovies?: Movie[];
  itemsSelected: string[] = [];
  selectedItem: string = '';
  private debounceTimer?: NodeJS.Timeout;

  constructor(
    private sharedDataService: ComunicacionService,
    private searchService: SearchService,
    private movieService: MoviesService
  ) {}
  async ngOnInit() {
    this.genres = await this.searchService.fetchGenres();
    this.movies = await this.movieService.fetchMovies();
    this.applyFilters();
  }
  onQueryChanged() {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.applyFilters();
    }, 300);
  }

  /*
  //usando server-json para el busqueda por title, description y genero de manera manual. Se puede cambiar a esta opcion de filtrado
  async applyFiltersbyserver() {
    const movies = await this.searchService.MovieFilters(
      this.fieldName,
      this.fieldDescription
    );
    this.filteredMovies = movies?.filter((movie: Movie) => {
      const matchesGenres =
        this.itemsSelected.length === 0 ||
        this.itemsSelected.some((genre) => movie.genre.includes(genre));
      return matchesGenres;
    });
    this.sharedDataService.actualizarPeliculasFiltradas(
      this.filteredMovies || []
    );
  }*/

  // usando manera nativa simulando que tengo todo los datos y los filtro. Este es el que esta implimentando
  applyFilters() {
    this.filteredMovies = this.movies?.filter((movie: Movie) => {
      const matchesName = this.fieldName
        ? movie.title.toLowerCase().includes(this.fieldName.toLowerCase())
        : true;
      const matchesDescription = this.fieldDescription
        ? movie.description
            .toLowerCase()
            .includes(this.fieldDescription.toLowerCase())
        : true;
      const matchesGenres =
        this.itemsSelected.length === 0 ||
        this.itemsSelected.some((genre) => movie.genre.includes(genre));
      return matchesName && matchesDescription && matchesGenres;
    });
    this.sharedDataService.actualizarPeliculasFiltradas(
      this.filteredMovies || []
    );
  }

  addElement() {
    if (this.selectedItem) {
      this.itemsSelected.push(this.selectedItem);
    }
    this.selectedItem = '';
    this.onQueryChanged();
  }

  deleteElement(index: number): void {
    this.itemsSelected.splice(index, 1);
    this.onQueryChanged();
  }
}
