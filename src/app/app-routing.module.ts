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
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./main/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'create-pagamento',
    loadChildren: () => import('./create-pagamento/create-pagamento.module').then( m => m.CreatePagamentoPageModule)
  },
  {
    path: 'create-pagamento',
    loadChildren: () => import('./create-pagamento/create-pagamento.module').then( m => m.CreatePagamentoPageModule)
  },
  {
    path: 'adicionar-produtos',
    loadChildren: () => import('./adicionar-produtos/adicionar-produtos.module').then( m => m.AdicionarProdutosPageModule)
  },
  {
    path: 'create-endereco',
    loadChildren: () => import('./create-endereco/create-endereco.module').then( m => m.CreateEnderecoPageModule)
  },  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
