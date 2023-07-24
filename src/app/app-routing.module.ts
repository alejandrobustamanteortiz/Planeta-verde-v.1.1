import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AuthGuard
} from '@angular/fire/auth-guard'

const redirectUnhauthorithedToLogin = () => redirectUnauthorizedTo(['.'])
const redirectLoggedInToHome = () => redirectLoggedInTo(['home'])


const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => 
      m.LoginPageModule)
  },    
  {
    path: 'init-tabs',
    loadChildren: () => import('./pages/init-tabs/init-tabs.module').then( m => m.InitTabsPageModule),
    canActivate: [AuthGuard],
    data: {authGuardPipe:redirectUnhauthorithedToLogin}
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
