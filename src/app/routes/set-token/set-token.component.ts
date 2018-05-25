import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TrelloAuthService} from '../../common/trello-auth/trello-auth.service';

@Component({
  selector: 'ata-set-token',
  templateUrl: './set-token.component.html',
  styleUrls: ['./set-token.component.scss']
})
export class SetTokenComponent implements OnInit {

  constructor(private router: Router, private trelloAuthService: TrelloAuthService) {}

  ngOnInit() {
    const hash = window.location.hash;
    const token = hash.split('=')[1];
    this.trelloAuthService.setToken(token);
    this.router.navigate(['/']);
  }

}
