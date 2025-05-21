import { Component, input } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  gifs = input.required<Gif[]>();

  ngAfterViewInit(){

    console.log(this.gifs());
  }

}
