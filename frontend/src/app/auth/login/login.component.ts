import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { TokenService } from '../../shared/services/token.service';
import { AuthStateService } from '../../shared/services/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errors:any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public _authService: AuthService,
    private _token: TokenService,
    private _authState: AuthStateService
  ) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    await this._authService.login(this.form.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this._authState.setAuthState(true);
        this.form.reset();
        this.router.navigate(['perfil']);
      }
    );
  }

    // Handle response
    responseHandler(data:any) {
      this._token.handleData(data.access_token);
    }

}
