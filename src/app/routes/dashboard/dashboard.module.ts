import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

import { IconsModule } from '../../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IconsModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule {
}
