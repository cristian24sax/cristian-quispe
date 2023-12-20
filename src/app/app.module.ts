import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { SearchComponent } from './components/search/search.component';
import { CardMovieComponent } from './shared/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListMoviesComponent,
    DetailsMoviesComponent,
    HeadersComponent,
    CardMovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
