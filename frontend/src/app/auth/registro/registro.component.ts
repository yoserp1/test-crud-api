import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CustomValidators } from '../../shared/custom-validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('successModal') successModal!: TemplateRef<any>;

  form: FormGroup;
  errors:any = null;
  message:any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public _authService: AuthService,
    private _modal: NgbModal
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
      address: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      birthdate: new FormControl('', []),
      city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
    },
    { validator: CustomValidators.MatchingPasswords }
    );
   }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get password_confirmation() {
    return this.form.get('password_confirmation');
  }

  get address() {
    return this.form.get('address');
  }

  get birthdate() {
    return this.form.get('birthdate');
  }

  get city() {
    return this.form.get('city');
  }

  async onSubmit() {
    await this._authService.registro(this.form.value).subscribe(
      (result) => {
        console.log(result);
        this.message = result.message;
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this._modal.open(this.successModal, { centered: true, backdrop: false });
        this.form.reset();
        this.router.navigate(['/']);
      }
    );
  }

}
