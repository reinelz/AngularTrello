import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trello} from '../../../trello';
import User = Trello.User;
import Cards = Trello.Cards;
import Boards = Trello.Boards;
import { Observable } from 'rxjs/Observable';
import { first, map } from 'rxjs/operators';

@Injectable()
export class TrelloService {

  constructor(private httpClient: HttpClient) {
  }

  async getMe(): Promise<User> {
    return this.httpClient.get<User>('https://api.trello.com/1/members/me').toPromise();
  }

  getCardsFromBoard(id): Observable<Cards[]> {
    return this.httpClient.get<Cards[]>('https://api.trello.com/1/boards/' + id + '/cards');
  }

  getBoards(): Observable<Boards[]> {
    return this.httpClient.get<Boards[]>('https://api.trello.com/1/members/me/boards')
      .pipe(map(res => {
          const data = [];
          for (let i = 0; i < res.length; i++) {
            data.push([res[i].id, res[i].name]);
          }
          return data;
        }
      ));
  }

  getCommentCards(id): Observable<any> {
    return this.httpClient.get('https://api.trello.com/1/cards/' + id + '/actions?filter=commentCard');
  }

}
