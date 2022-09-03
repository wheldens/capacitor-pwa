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
    path: 'photos',
    children:[
      {
        path:'',
        loadChildren: () => import('./photos/photos.module').then( m => m.PhotosPageModule)
      },
      {
        path:':photoId',
        loadChildren: () => import('./photos/photo-details/photo-details.module').then( m => m.PhotoDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
