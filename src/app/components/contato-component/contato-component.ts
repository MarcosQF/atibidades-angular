import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato-component',
  imports: [FormsModule],
  templateUrl: './contato-component.html',
  styleUrl: './contato-component.css',
})
export class ContatoComponent {

  contato = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  }

 onSubmit(form: NgForm) {
   if (form.valid) {
     console.log(form.value);
   }
 }

}
