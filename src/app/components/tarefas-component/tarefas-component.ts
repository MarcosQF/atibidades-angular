import { Component, DestroyRef, inject, OnInit, Signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarefaService } from '../../services/tarefa-service';
import { Tarefa } from '../../interfaces/tarefa';

@Component({
  selector: 'app-tarefas-component',
  imports: [ReactiveFormsModule],
  templateUrl: './tarefas-component.html',
  styleUrl: './tarefas-component.css',
})
export class TarefasComponent implements OnInit {
  private fb = inject(FormBuilder);
  private tarefaService = inject(TarefaService);
  private destroyRef = inject(DestroyRef)

  tarefaForm = this.fb.group({
    titulo: ['', [Validators.required]],
  });

  get titulo() {
    return this.tarefaForm.get('titulo');
  }

  protected enviarTarefa() {
    if (this.tarefaForm.valid) {
      const novaTarefa = this.tarefaForm.value as Tarefa;
      this.tarefaService.adicionarTarefa(novaTarefa);
      this.tarefaForm.reset();
    }
  }

  protected tarefas!: Signal<Tarefa[]>

  ngOnInit(): void {
    this.tarefas = this.tarefaService.getTarefas();

    this.destroyRef.onDestroy(() => {
      console.log('O componente foi destruído!');
    });

  }
}
