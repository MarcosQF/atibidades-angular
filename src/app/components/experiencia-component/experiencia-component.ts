import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './experiencia-component.html',
})
export class ExperienciaComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    empresa: ['', [Validators.required]],
    experiencias: this.fb.array([this.novaExperiencia()]),
  });

  get experiencias() {
    return this.form.get('experiencias') as FormArray;
  }

  private novaExperiencia() {
    return this.fb.group({
      empresa: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      anoInicio: ['', [Validators.required, Validators.min(1990)]],
      anoFim: [''],
    });
  }

  adicionarExperiencia() {
    this.experiencias.push(this.novaExperiencia());
  }

  removerExperiencia(index: number) {
    this.experiencias.removeAt(index);
  }
}
