import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./pagina/alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pagina/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pagina/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('./pagina/infinite/infinite.module').then( m => m.InfinitePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pagina/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pagina/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pagina/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pagina/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'sliding',
    loadChildren: () => import('./pagina/sliding/sliding.module').then( m => m.SlidingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
