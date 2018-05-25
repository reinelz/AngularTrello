import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetTokenRoutingModule } from './set-token-routing.module';
import { SetTokenComponent } from './set-token.component';

@NgModule({
  imports: [
    CommonModule,
    SetTokenRoutingModule
  ],
  declarations: [SetTokenComponent]
})
export class SetTokenModule { }
