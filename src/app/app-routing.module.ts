import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionHomeComponent } from './collections/collection-home/collection-home.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';

const routes: Routes = [
  {
    path: 'elements',
    component: ElementsHomeComponent,
  },
  {
    path: 'collections',
    component: CollectionHomeComponent,
  },
  {
    path: 'views',
    component: ViewHomeComponent,
  },

  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
