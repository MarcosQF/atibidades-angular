import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PalestranteService } from '../../services/palestrante-service';
import { Palestrante } from '../../interfaces/palestrante';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-palestrante-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './palestrante-list.html',
  styleUrl: './palestrante-list.css',
})
export class PalestranteList implements OnInit {
  private palestranteService = inject(PalestranteService);
  private destroyRef = inject(DestroyRef)

  palestrantes = signal<Palestrante[]>([]);
  loading = signal<boolean>(true);
  termoBusca = signal<string>('');

  ngOnInit(): void {
    this.carregarPalestrantes();
  }

  carregarPalestrantes(): void {
    this.loading.set(true);
    this.palestranteService.buscarPalestrantes()
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (dados) => {
        this.palestrantes.set(dados);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar', err);
        this.loading.set(false);
      }
    });
  }

  filtrarPorEmpresa(): void {
    const empresa = this.termoBusca().trim();

    if (!empresa) {
      this.carregarPalestrantes();
      return;
    }

    this.loading.set(true);
    this.palestranteService.buscarPalestrantesEmpresa(empresa).subscribe({
      next: (dados) => {
        this.palestrantes.set(dados);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao filtrar', err);
        this.loading.set(false);
      }
    });
  }
}
