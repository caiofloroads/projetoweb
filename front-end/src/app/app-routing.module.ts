import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichaListComponent } from './ficha/ficha-list/ficha-list.component';
import { FichaFormComponent } from './ficha/ficha-form/ficha-form.component';

const routes: Routes = [
    { path: 'ficha', component: FichaListComponent },
    { path: 'ficha/novo', component: FichaFormComponent },
    { path: 'ficha/:id', component: FichaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
