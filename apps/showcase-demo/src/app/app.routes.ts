import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'templates/dashboard', pathMatch: 'full' },
  {
    path: 'blui-components/surface-components',
    loadComponent: () => import('./pages/blui/surfaces/surfaces.component').then((m) => m.BluiSurfacesComponent),
  },
  {
    path: 'blui-components/data-display-components',
    loadComponent: () => import('./pages/blui/data-display/display.component').then((m) => m.BluiDisplayComponent),
  },
  {
    path: 'blui-components/navigation-components',
    loadComponent: () => import('./pages/blui/navigation/navigation.component').then((m) => m.BluiNavigationComponent),
  },
  {
    path: 'blui-components/typography',
    loadComponent: () => import('./pages/blui/typography.component').then((m) => m.BluiTypographyComponent),
  },
  {
    path: 'material-components/data-display-components',
    loadComponent: () => import('./pages/mat/data-display/display.component').then((m) => m.MatDisplayComponent),
  },
  {
    path: 'material-components/feedback-components',
    loadComponent: () => import('./pages/mat/feedback/feedback.component').then((m) => m.MatFeedackComponent),
  },
  {
    path: 'material-components/input-components',
    loadComponent: () => import('./pages/mat/inputs/inputs.component').then((m) => m.MatInputsComponent),
  },
  {
    path: 'material-components/navigation-components',
    loadComponent: () => import('./pages/mat/navigation/navigation.component').then((m) => m.MatNavigationComponent),
  },
  {
    path: 'material-components/surface-components',
    loadComponent: () => import('./pages/mat/surfaces/surfaces.component').then((m) => m.MatSurfacesComponent),
  },
  {
    path: 'templates/alarms',
    loadComponent: () => import('./pages/templates/alarms/alarms.component').then((m) => m.AlarmsComponent),
  },
  {
    path: 'templates/dashboard',
    loadComponent: () => import('./pages/templates/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'templates/settings',
    loadComponent: () => import('./pages/templates/settings/settings.component').then((m) => m.SettingsComponent),
  },
];
