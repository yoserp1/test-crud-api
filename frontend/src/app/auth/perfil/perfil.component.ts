import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil!: Usuario;

  constructor(
    public _authService: AuthService,
  ) {
    this._authService.perfil().subscribe((data: any) => {
      this.perfil = data;
    });
  }

  ngOnInit(): void {
  }

}
