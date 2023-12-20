import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/movies.interface';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  filteredMovies: Movie[] = [];
  private subscriptions: Subscription[] = [];
  constructor(private sharedDataService: ComunicacionService) {}
  ngOnInit(): void {
    this.subscriptions.push(
      this.sharedDataService.filteredMoviesSubject.subscribe(
        (peliculasFiltradas) => {
          this.filteredMovies = peliculasFiltradas;
        }
      )
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
