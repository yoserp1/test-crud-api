import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

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


}
