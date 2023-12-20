import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';

const routes: Routes = [
  // {
  //   path: 'list',
  //   component: DetailsMoviesComponent,
  // },
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: '**', pathMatch: 'full', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
