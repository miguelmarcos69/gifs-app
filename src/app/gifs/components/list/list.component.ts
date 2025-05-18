import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
  selector: 'gifs-list',
  imports: [ListItemComponent],
  templateUrl: './list.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
