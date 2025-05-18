import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DashboardPageComponent from "./gifs/pages/dashboard-page/dashboard-page.component";

@Component({
  selector: 'app-root',
  imports: [DashboardPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gifs-app';
}
