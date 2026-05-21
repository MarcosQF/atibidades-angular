import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContatoComponent } from './components/contato-component/contato-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('form');

}
