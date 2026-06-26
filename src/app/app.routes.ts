import { Routes } from '@angular/router';
import { TarefasComponent } from './components/tarefas-component/tarefas-component';
import { FormsPage } from './components/forms-page/forms-page';
import { PalestranteList } from './components/palestrante-list/palestrante-list';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'tarefas', component: TarefasComponent },
  { path: 'forms', component: FormsPage },
  { path: 'palestrantes', component: PalestranteList }
];
