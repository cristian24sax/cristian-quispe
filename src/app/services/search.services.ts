import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environments } from 'src/environments/environments';
import { genres } from '../interfaces/movies.interface';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl: string = environments.baseUrl;

  constructor() {}

  async fetchGenres() {
    try {
      const response: AxiosResponse = await axios.get<genres[]>(
        `${this.baseUrl}/genres`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Error desconocido');
    }
  }

  async MovieFilters(name: string, description: string) {
    try {
      const response: AxiosResponse = await axios.get<genres[]>(
        `${this.baseUrl}/movies?title_like=${name}&description_like=${description}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Error desconocido');
    }
  }
}
