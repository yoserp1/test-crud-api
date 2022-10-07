import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Location } from '@angular/common';

import { PersonajeService } from '../personaje.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @ViewChild('successModal') successModal!: TemplateRef<any>;

  personaje!: Character | undefined;
  errors:any = null;
  message:any = null;
  messageError:any = null;

  constructor(
    private route: ActivatedRoute,
    public _personajeService: PersonajeService,
    private location: Location,
    private _modal: NgbModal,
  ) { }

  async ngOnInit(): Promise<void> {
    let { id } = await firstValueFrom(this.route.params);
    this.personaje = await this._personajeService.detalle(id);
  }

  regresar(){
    this.location.back();
  }

  favorito(personaje: Character | undefined){

    this._personajeService.favorito(personaje).subscribe(
      (result) => {
        console.log(result);
        this.message = result.message;
      },
      (error) => {
        this.errors = error.error;
        this.messageError = error.message;
      },
      () => {
        this._modal.open(this.successModal, { centered: true, backdrop: false });
      }
    );

  }

}
