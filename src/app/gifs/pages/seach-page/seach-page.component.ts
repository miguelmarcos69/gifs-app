import { GifService } from './../../services/gifs.service';
import { Component, inject, signal } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-seach',
  imports: [ListComponent],
  templateUrl: './seach-page.component.html',
})
export default class SeachComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    console.log({ query });

    this.gifService.searchGifs(query).subscribe((data) => {
      this.gifs.set(data);
      console.log(this.gifs());
    });
  }
}
