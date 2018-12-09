import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogComponent } from './components/dog/dog.component';

const routes: Routes = [
  { path: '', redirectTo: '/dog/all', pathMatch: 'full' },
  { path: 'dog/:id', component: DogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }