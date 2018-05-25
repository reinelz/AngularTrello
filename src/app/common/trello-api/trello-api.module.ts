import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokenInterceptor} from './token-interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TrelloService} from './trello.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TrelloService
  ],
})
export class TrelloApiModule {
}
