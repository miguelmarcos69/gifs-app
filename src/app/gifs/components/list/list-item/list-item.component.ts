import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent { }
