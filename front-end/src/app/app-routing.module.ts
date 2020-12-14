import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichaListComponent } from './ficha/ficha-list/ficha-list.component';

const routes: Routes = [
    { path: 'ficha', component: FichaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
