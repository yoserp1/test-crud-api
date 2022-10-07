import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from '../../shared/custom-validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  errors:any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
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

  get confirmPassword() {
    return this.form.get('confirmPassword');
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

  onSubmit() {

  }

}
