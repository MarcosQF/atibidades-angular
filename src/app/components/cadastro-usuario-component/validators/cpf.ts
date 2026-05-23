import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfFormato(control: AbstractControl): ValidationErrors | null {
  const valor = control.value as string;

  if (!valor) return null;

  const formatoValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor);

  return formatoValido ? null : { cpfFormato: true };
}
