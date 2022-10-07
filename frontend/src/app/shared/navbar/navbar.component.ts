import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '../../shared/services/token.service';
import { AuthStateService } from '../../shared/services/auth-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSignedIn!: boolean;

  constructor(
    private _token: TokenService,
    private _authState: AuthStateService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this._authState.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  logOut() {
    this._authState.setAuthState(false);
    this._token.removeToken();
    this.router.navigate(['/']);
  }

}
