import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionHomeComponent } from './collections/collection-home/collection-home.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
