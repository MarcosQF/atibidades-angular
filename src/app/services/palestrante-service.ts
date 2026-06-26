import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Palestrante } from '../interfaces/palestrante';

@Injectable({
  providedIn: 'root',
})
export class PalestranteService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001/api/palestrantes';

  buscarPalestrantes(): Observable<Palestrante[]> {
    return this.http.get<Palestrante[]>(this.apiUrl);
  }

}
