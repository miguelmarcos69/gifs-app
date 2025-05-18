import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-treding',
  imports: [ListComponent],
  templateUrl: './treding-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TredingComponent {}
