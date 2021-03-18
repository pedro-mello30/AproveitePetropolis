import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
          },
          {
            path: 'idCategoria',
            children: [
              {
                path: '',
                loadChildren: () => import('../categoria/categoria.module').then( m => m.CategoriaPageModule)
              },
              {
                path: ':idSubcategoria',
                children: [
                  {
                    path: '',
                    loadChildren: () => import('../subcategoria/subcategoria.module').then( m => m.SubcategoriaPageModule)
                  },
                  {
                    path: ':idEstabelecimento',
                    loadChildren: () => import('../estabelecimento/estabelecimento.module').then( m => m.EstabelecimentoPageModule)
                  }
                ]
              },
              {
                path: 'estabelecimento/:idEstabelecimento',
                loadChildren: () => import('../estabelecimento/estabelecimento.module').then( m => m.EstabelecimentoPageModule)
              },
            ]
          }
        ]
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
