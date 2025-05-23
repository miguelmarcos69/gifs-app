import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY = 'gidfs';
const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) || '{}';
    const gifs = JSON.parse(gifsFromLocalStorage);
    console.log(gifs);
    return gifs;
  }
  return {};
};

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  tredingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistorykeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    
    this.loadTrendigGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
    console.log(historyString);
  });
  loadTrendigGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((data) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(data.data);
        this.trendingGifs.set(gifs);
        this.tredingGifsLoading.set(false);
        console.log(gifs);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
        tap((items) => {
          this.searchHistory.update((histoy) => ({
            ...histoy,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }

  getHistoryGifs(query: string): Gif[] {
    console.log({ query });

    return this.searchHistory()[query] ?? [];
  }
}
