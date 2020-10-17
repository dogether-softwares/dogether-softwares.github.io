import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SelectivePreloadingStrategyService } from './global.service';

const routes: Routes =
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule), data: { preload: true } }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
