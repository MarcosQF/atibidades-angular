import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { senha } from './validators/senha';
import { cpfFormato } from './validators/cpf';
import { senhasIguais } from './validators/senhasIguais';

@Component({
  selector: 'app-cadastro-usuario-component',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-usuario-component.html',
  styleUrl: './cadastro-usuario-component.css',
})
export class CadastroUsuarioComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group(
    {
      nomeCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      cpf: ['', [Validators.required, cpfFormato]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimneto: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(8), senha]],
      confirmarSenha: ['', [Validators.required]],
      perfil: ['', [Validators.required]],
    },
    { validators: senhasIguais }
  );

  get nomeCompleto() {
    return this.form.get('nomeCompleto');
  }

  get cpf() {
    return this.form.get('cpf');
  }

  get email() {
    return this.form.get('email');
  }
  get senha() {
    return this.form.get('senha');
  }

  get confirmarSenha() {
    return this.form.get('confirmarSenha');
  }
  get dataNascimento() {
    return this.form.get('dataNascimento');
  }
  get perfil() {
    return this.form.get('perfil');
  }
}
