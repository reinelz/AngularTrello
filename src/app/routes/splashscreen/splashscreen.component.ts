import { Component, OnInit } from '@angular/core';
import {TrelloAuthService} from '../../common/trello-auth/trello-auth.service';

@Component({
  selector: 'ata-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss']
})
export class SplashscreenComponent implements OnInit {

  constructor(private trelloAuthService: TrelloAuthService) { }

  ngOnInit() {
  }

  login() {
    this.trelloAuthService.login();
  }
}
