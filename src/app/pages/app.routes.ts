import { Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'by-region/:region',
    component: CountriesComponent,
  },
  {
    path: 'country-details/:cca3',
    component: CountryDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
