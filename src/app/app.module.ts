import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {SetTokenModule} from './routes/set-token/set-token.module';
import {DashboardModule} from './routes/dashboard/dashboard.module';
import {SplashscreenModule} from './routes/splashscreen/splashscreen.module';
import {PrivateGuard} from './private.guard';
import {PublicGuard} from './public.guard';
import {TrelloAuthModule} from './common/trello-auth/trello-auth.module';
import {TrelloApiModule} from './common/trello-api/trello-api.module';
import { COMMON_PIPES } from '@angular/common/src/pipes';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { DateCalcService } from './services/date-calc.service';
import { TrelloBoardService } from './services/board/trello-board.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SetTokenModule,
    DashboardModule,
    SplashscreenModule,
    TrelloAuthModule,
    TrelloApiModule,
    IconsModule
  ],
  providers: [
    PrivateGuard,
    PublicGuard,
    DateCalcService,
    TrelloBoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
