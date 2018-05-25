import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashscreenComponent} from './splashscreen.component';
import {PublicGuard} from '../../public.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [
      PublicGuard,
    ],
    children: [
      {
        path: '',
        component: SplashscreenComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashscreenRoutingModule {
}
