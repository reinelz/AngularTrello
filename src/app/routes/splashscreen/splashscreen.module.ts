import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashscreenRoutingModule } from './splashscreen-routing.module';
import { SplashscreenComponent } from './splashscreen.component';

@NgModule({
  imports: [
    CommonModule,
    SplashscreenRoutingModule
  ],
  declarations: [SplashscreenComponent]
})
export class SplashscreenModule { }
