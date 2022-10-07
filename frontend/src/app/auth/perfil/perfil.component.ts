import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @ViewChild('successModal') successModal!: TemplateRef<any>;

  perfil!: Usuario;
  nombre:any = null;
  form: FormGroup;
  errors:any = null;
  message:any = null;
  messageError:any = null;

  constructor(
    public _authService: AuthService,
    public fb: FormBuilder,
    private _modal: NgbModal,
    public router: Router,
  ) {

    this._authService.perfil().subscribe((data: any) => {
      this.perfil = data;
      this.nombre = this.perfil.name;
      this.form.patchValue({
        name: this.perfil.name,
        email: this.perfil.email,
        address: this.perfil.address,
        birthdate: this.perfil.birthdate,
        city: this.perfil.city,
      });
    });

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.email]),
      address: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      birthdate: new FormControl('', []),
      city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
    }
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
    await this._authService.actualizar(this.form.value).subscribe(
      (result) => {
        this.message = result.message;
      },
      (error) => {
        this.errors = error.error;
        this.messageError = error.message;
      },
      () => {
        this._modal.open(this.successModal, { centered: true, backdrop: false });
        this.router.navigate(['/perfil']);
      }
    );
  }

}
