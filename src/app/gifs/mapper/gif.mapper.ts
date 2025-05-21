import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interfaces';
export class GifMapper {
  static MapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      tittle: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.MapGiphyItemToGif);
  }
}
