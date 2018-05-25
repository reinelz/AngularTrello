import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {TrelloAuthService} from '../../common/trello-auth/trello-auth.service';
import {TrelloService} from '../../common/trello-api/trello.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import { DateCalcService } from '../../services/date-calc.service';
import { TrelloBoardService } from '../../services/board/trello-board.service';
import { Trello } from '../../../trello';
import InAndOutbox = Trello.InAndOutbox;
import Cards = Trello.Cards;

@Component({
  selector: 'ata-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

  trelloUser;
  boards;
  comments: { sortedInbox: InAndOutbox[], sortedOutbox: InAndOutbox[] };
  cards: { overdue: Cards[], overdueToday: Cards[] };

  constructor(
    private trelloAuthService: TrelloAuthService,
    private trelloService: TrelloService,
    private dateCalcService: DateCalcService,
    private boardService: TrelloBoardService
  ) {}

  async ngOnInit() {
    const user = await this.trelloService.getMe();
    this.trelloUser = user;
    this.boardService.fetchTrelloUser(user);

    this.boardService.boardList().subscribe(r => {
      this.boards = r;
    })

    this.boardService.firstBoard().subscribe(r => {
      this.InAndOutbox(r[0]);
      this.Cards(r[0]);
    });

  }

  ngOnDestroy(): void {
  }

  logout() {
    this.trelloAuthService.logout();
  }


  changeBoard(event) {
    this.boardService.changeBoard();
    this.InAndOutbox(event.target.value);
    this.Cards(event.target.value);
  }

  InAndOutbox(id) {
    this.boardService.getCommentsInOutAndInbox(id).subscribe(r => {
      this.comments = {sortedInbox: r.sortedInbox, sortedOutbox: r.sortedOutbox};
    });
  }

  Cards(id) {
    this.boardService.getCards(id).subscribe( r => {
      this.cards = {overdue: r.overdue, overdueToday: r.overdueToday};
    });

  }

  isReady() {
    return this.boardService.loadSpinner;
  }

  getDayDiff(date) {
    const diff = this.dateCalcService.getTimeDiff(date);

    if (diff == 1) {
      return '1 Tag ';
    }

    return diff + ' Tage ';
  }


}
