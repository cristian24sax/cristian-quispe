import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environments } from 'src/environments/environments';
import { Movie, genres } from '../interfaces/movies.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl: string = environments.baseUrl;

  constructor() {}

  async fetchMovies() {
    try {
      const response: AxiosResponse = await axios.get<Movie[]>(
        `${this.baseUrl}/movies`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Error desconocido');
    }
  }
  
}
