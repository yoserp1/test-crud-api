import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from 'src/app/shared/models/character.model';
import { PersonajeService } from '../personaje.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: Character[] = [];

  constructor(
    public router: Router,
    public _personajeService: PersonajeService,
  ) {

  }

  async ngOnInit(): Promise<void> {
    await this.getLista();
  }

  async getLista() {
    let res = await this._personajeService.lista();
    if (res) {
      this.lista = res.results;
    }
  }

}
