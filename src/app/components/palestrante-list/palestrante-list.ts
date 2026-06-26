import { Component, inject, OnInit, signal } from '@angular/core';
import { PalestranteService } from '../../services/palestrante-service';
import { Palestrante } from '../../interfaces/palestrante';

@Component({
  selector: 'app-palestrante-list',
  imports: [],
  templateUrl: './palestrante-list.html',
  styleUrl: './palestrante-list.css',
})
export class PalestranteList implements OnInit{
private palestranteService = inject(PalestranteService);

  palestrantes = signal<Palestrante[]>([]);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.carregarPalestrantes();
  }

  carregarPalestrantes(): void {
    this.palestranteService.buscarPalestrantes().subscribe({
      next: (dados) => {
        this.palestrantes.set(dados);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar palestrantes', err);
        this.loading.set(false);
      }
    });
  }

}
