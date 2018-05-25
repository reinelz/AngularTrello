import { Injectable } from '@angular/core';
import { TrelloService } from '../../common/trello-api/trello.service';
import { Trello } from '../../../trello';
import { isNull } from 'util';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import Cards = Trello.Cards;
import Boards = Trello.Boards;


@Injectable()
export class TrelloBoardService {

  trelloUser;
  overDueCards: Array<any> = [];
  overDueCardsToday: Array<any> = [];
  allComments = [];
  outboxCards = [];
  inboxCards = [];

  loadSpinner: boolean = true;
  cardsDone: boolean = false;
  commentsDone: boolean = false;

  constructor(private trelloService: TrelloService) {
  }

  fetchTrelloUser(user) {
    this.trelloUser = user;
  }


  changeBoard(event) {
    this.loadSpinner = true;
    this.commentsDone = false;
    this.cardsDone = false;
    this.overDueCards = [];
    this.overDueCardsToday = [];
    this.allComments = [];
    this.outboxCards = [];
    this.inboxCards = [];
  }

  boardList(): Observable<Boards[]> {
    return this.trelloService.getBoards();
  }

  firstBoard(): Observable<Boards> {
    return this.boardList().pipe(map(r => {
      return r[0];
    }));
  }

  getCommentsInOutAndInbox(id): Observable<{ sortedInbox: any[], sortedOutbox: any[] }> {
    return this.trelloService.getCardsFromBoard(id).pipe(
      switchMap((result: Cards[]) => {

        const observables = result.map(card =>
          Observable.combineLatest(Observable.of(card), this.trelloService.getCommentCards(card.id))
        );
        return Observable.combineLatest(observables);

      }),
      map(data => {


        const sortedOutbox = [];
        const sortedInbox = [];

        for (const item of data) {

          if (item[1].length > 0) {
            item[1].sort(function (a, b) {
              return (new Date(b.date).getTime() - new Date(a.date).getTime());
            });
            if (item[1][0]['idMemberCreator'] == this.trelloUser.id) {
              sortedOutbox.push(item);
            }

            if (this.checkIfCommented(item[1]) || this.checkIfMember(item[0])) {
              if (item[1][0]['idMemberCreator'] !== this.trelloUser.id) {
                sortedInbox.push(item);
              }
            }

          }

        }

        return { sortedInbox: sortedInbox, sortedOutbox: sortedOutbox };
      }),
      tap(() => {
        if (this.cardsDone) {
            this.loadSpinner = false;
        }

        this.commentsDone = true;
      })
    );
  }

  getCards(id) {
    return this.trelloService.getCardsFromBoard(id).pipe(
      map(
        (result: Cards[]) => {
          const cardsToInspect = result.filter(elm => !isNull(elm.due) && !elm.dueComplete);

          const overDue = cardsToInspect.filter(e => moment(e.due).isBefore(moment().hours(0).minutes(0).seconds(0).milliseconds(0)));
          const overDueToday = cardsToInspect.filter(e => moment(e.due).isSame(moment(), 'day'));

          return { overdue: overDue, overdueToday: overDueToday };
        }),
      tap(() => {
        if (this.commentsDone) {
            this.loadSpinner = false;
        }

        this.cardsDone = true;
      })
    );
  }

  checkIfCommented(comments) {
    const commentFromMe = comments.find(c => c.idMemberCreator === this.trelloUser.id);
    if (commentFromMe) {
      return true;
    }

    return false;
  }

  checkIfMember(cards) {
    return cards.idMembers.indexOf(this.trelloUser.id) > -1;
  }



}
