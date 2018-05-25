import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TRELLO_TOKEN_KEY} from './trello-token-key';

@Injectable()
export class TrelloAuthService {


  /**
   * This is the token the user gets assigned by Trello.
   * We will store it in LocalStorage on the client side.*/
  public token: string;

  /**
   * The apiKey is the identity of our application when we talk to the Trello API.
   * */
  public apiKey: string = '09637f57a22e9f7af1062f0caf2c2761';

  constructor(private router: Router) {
    this.token = localStorage.getItem(TRELLO_TOKEN_KEY);
  }

  getToken(): string | undefined {
    return localStorage.getItem(TRELLO_TOKEN_KEY);
  }

  login() {
    window.location.href = this.assembleUrl();

  }

  assembleUrl(): string {
    const returnUrl = encodeURI(window.location.href + 'set-token');
    return `https://trello.com/1/authorize?response_type=token&key=${this.apiKey}&return_url=${returnUrl}&callback_method=fragment&scope=read%2Cwrite%2Caccount&expiration=never&name=Calendar+for+Trello`;
  }


  /**
   * On logout just navigate to the root route.
   * Your guards are responsible to redirect
   * the user then to the appropriate URL.*/
  async logout(): Promise<void> {
    localStorage.removeItem(TRELLO_TOKEN_KEY);
    await this.router.navigate(['/']);
  }

  setToken(token: string): void {
    return localStorage.setItem(TRELLO_TOKEN_KEY, token);
  }
}
