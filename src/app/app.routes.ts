import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home').then(m => m.HomePage),
  },
  {
    path: 'despre',
    loadComponent: () =>
      import('./components/about-history/about-history').then(m => m.AboutHistoryPage),
  },
  {
    path: 'realizari',
    loadComponent: () =>
      import('./components/achievements-page/achievements-page').then(m => m.AchievementsPage),
  },
];

