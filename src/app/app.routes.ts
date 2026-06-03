import { Routes } from '@angular/router';
import { TarefasComponent } from './components/tarefas-component/tarefas-component';
import { FormsPage } from './components/forms-page/forms-page';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'tarefas', component: TarefasComponent },
  { path: 'forms', component: FormsPage }
];
