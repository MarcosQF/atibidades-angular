import { Injectable, signal } from '@angular/core';
import { Tarefa } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  protected tarefas = signal<Tarefa[]>([]);

  public adicionarTarefa(novaTarefa: Tarefa) {
    this.tarefas.update((atuais) => [...atuais, novaTarefa]);
  }

  public getTarefas() {
    return this.tarefas.asReadonly();
  }
}
