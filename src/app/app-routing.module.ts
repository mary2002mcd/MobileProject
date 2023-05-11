import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'episode1',
    loadChildren: () => import('./episode1/episode1.module').then( m => m.Episode1PageModule)
  },  {
    path: 'facts',
    loadChildren: () => import('./facts/facts.module').then( m => m.FactsPageModule)
  },
  {
    path: 'lightsabers',
    loadChildren: () => import('./lightsabers/lightsabers.module').then( m => m.LightsabersPageModule)
  },
  {
    path: 'galaxy',
    loadChildren: () => import('./galaxy/galaxy.module').then( m => m.GalaxyPageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
