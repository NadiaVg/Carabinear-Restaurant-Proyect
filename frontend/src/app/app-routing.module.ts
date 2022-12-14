import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./auth/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./pages/questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'admin-list',
    loadChildren: () => import('./admin-pages/admin-list/admin-list.module').then( m => m.AdminListPageModule)
  },
  {
    path: 'add-restaurant',
    loadChildren: () => import('./admin-pages/add-restaurant/add-restaurant.module').then( m => m.AddRestaurantPageModule)
  },
  {
    path: 'update-restaurant/:id',
    loadChildren: () => import('./admin-pages/update-restaurant/update-restaurant.module').then( m => m.UpdateRestaurantPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'restaurant-card/:id',
    loadChildren: () => import('./pages/restaurant-card/restaurant-card.module').then( m => m.RestaurantCardPageModule)
  },
  {
    path: 'profile-settings',
    loadChildren: () => import('./pages/profile-settings/profile-settings.module').then( m => m.ProfileSettingsPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./admin-pages/users-list/users-list.module').then( m => m.UsersListPageModule)
  },
  {
    path: 'dishes/:id',
    loadChildren: () => import('./pages/dishes/dishes.module').then( m => m.DishesPageModule)
  },
  {
    path: 'add-dishes',
    loadChildren: () => import('./admin-pages/add-dishes/add-dishes.module').then( m => m.AddDishesPageModule)
  },
  {
    path: 'dishes-list/:id',
    loadChildren: () => import('./admin-pages/dishes-list/dishes-list.module').then( m => m.DishesListPageModule)
  },
  {
    path: 'update-dish/:id',
    loadChildren: () => import('./admin-pages/update-dish/update-dish.module').then( m => m.UpdateDishPageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
