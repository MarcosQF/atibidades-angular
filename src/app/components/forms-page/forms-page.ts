import { Component } from '@angular/core';
import { CadastroUsuarioComponent } from '../cadastro-usuario-component/cadastro-usuario-component';
import { ContatoComponent } from '../contato-component/contato-component';
import { ExperienciaComponent } from '../experiencia-component/experiencia-component';

@Component({
  selector: 'app-forms-page',
  imports: [CadastroUsuarioComponent,ContatoComponent,ExperienciaComponent],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css',
})
export class FormsPage {}
