import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Character } from 'src/app/shared/models/character.model';

const apiUlr = environment.apiUlr;

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  endpoint = apiUlr + '/api';

  constructor(
    private http: HttpClient
  ) { }

  async lista() {
    return await firstValueFrom(this.http.get<any>(this.endpoint + '/character'));
  }

  async detalle(id: number) {
    return await firstValueFrom(this.http.get<Character>(this.endpoint + '/character/detail/' + id));
  }

  favorito(personaje: Character | undefined): Observable<any> {
    return this.http.post<any>(this.endpoint + '/character/favorite', { ref_api: personaje?.url });
  }

}
