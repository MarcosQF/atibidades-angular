import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Palestrante } from '../interfaces/palestrante';

@Injectable({
  providedIn: 'root',
})
export class PalestranteService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001/api/palestrantes';

  buscarPalestrantes(): Observable<Palestrante[]> {
    return this.http.get<Palestrante[]>(this.apiUrl).pipe(
      tap((palestrantes) => console.log('Total de palestrantes recebidos:', palestrantes.length)),
      catchError((error) => {
        console.error('Erro ao buscar palestrantes:', error);
        return of([]);
      }),
    );
  }

  buscarPalestrantesEmpresa(empresa: string) {
    return this.http.get<Palestrante[]>(this.apiUrl).pipe(
      map((palestrantes) => palestrantes.filter((palestrante) => palestrante.empresa == empresa)),
    );
  }
}
