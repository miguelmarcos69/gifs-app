import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dasboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/seach-page/seach-page.component'),
      },
      {
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history/gif-history.component'),
      },
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/treding-page/treding-page..component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dasboard',
  },
];
