import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path: 'home',
      pathMatch: 'prefix',
      loadChildren: () =>
        import('./pages/home/home.module').then( 
          m => m.HomeModule
        )
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
