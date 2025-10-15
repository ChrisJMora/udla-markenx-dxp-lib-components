import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMarkenxHeaderComponent } from 'projects/markenx-components/src/public-api';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assignments',
    pathMatch: 'full',
  },
  {
    path: 'assignments',
    component: AppMarkenxHeaderComponent,
    data: { breadcrumb: 'Mis Asignaciones' },
  },
  {
    path: 'lessons',
    component: AppMarkenxHeaderComponent,
    data: { breadcrumb: 'Mis Evaluaciones' },
  },
  {
    path: 'game-mode',
    data: { breadcrumb: 'Modos de Juego' },
    children: [
      {
        path: '',
        redirectTo: 'tutorial',
        pathMatch: 'full',
      },
      {
        path: 'tutorial',
        component: AppMarkenxHeaderComponent,
        data: { breadcrumb: 'Tutorial' },
      },
      {
        path: 'normal',
        component: AppMarkenxHeaderComponent,
        data: { breadcrumb: 'Normal' },
      },
    ],
  },
  {
    path: 'progress',
    component: AppMarkenxHeaderComponent,
    data: { breadcrumb: 'Mi Progreso' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
