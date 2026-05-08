import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'laboral',
    loadComponent: () => import('./laboral/laboral.page').then( m => m.LaboralPage)
  },
  {
    path: 'info-academica',
    loadComponent: () => import('./info-academica/info-academica.page').then( m => m.InfoAcademicaPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
