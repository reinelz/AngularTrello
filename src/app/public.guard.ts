import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TrelloAuthService} from './common/trello-auth/trello-auth.service';

@Injectable()
export class PublicGuard implements CanActivate {


  constructor(private router: Router, private trelloAuthService: TrelloAuthService) {
  }


  /**
   * I make sure that no visitor that has a token is able to visit 'public' routes.
   * E.g. splash screen and login should only be visible to users that aren't already logged in.*/
  canActivate(): boolean {
    if (this.trelloAuthService.getToken()) {
      this.router.navigate(['/app']);
      return false;
    } else {
      return true;
    }
  }
}
