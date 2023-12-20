import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  @Input()
  movie!: Movie;

  
}
