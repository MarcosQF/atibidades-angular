import { AbstractControl } from '@angular/forms';

export function senha(control: AbstractControl) {
  const valor = control.value as string;
  if (!valor) return null;

  const temNumero = /\d/.test(valor);
  const temMaiuscula = /[A-Z]/.test(valor);

  const valido = temNumero && temMaiuscula;

  return valido ? null : { senha: true };
}
