import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitTabsPage } from './init-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: InitTabsPage,
    children: [{
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'products',
      loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
    },
    {
      path: '',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    }]
    
  },  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitTabsPageRoutingModule {}
