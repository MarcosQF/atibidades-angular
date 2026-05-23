import { AbstractControl, ValidationErrors } from '@angular/forms';

export function senhasIguais(group: AbstractControl): ValidationErrors | null {
 const senha = group.get('senha')?.value;
 const confirmaSenha = group.get('confirmarSenha')?.value;

 return senha === confirmaSenha ? null : { senhasDiferentes: true };
}
