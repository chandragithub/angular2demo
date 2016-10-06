import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDashboard }  from '../components/dashboard/dashboard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: AppDashboard
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);