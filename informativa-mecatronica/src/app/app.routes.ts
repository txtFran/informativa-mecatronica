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
    path: 'academica',
    loadComponent: () => import('./academica/academica.page').then(
      (m) => m.AcademicaPage,
    ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
