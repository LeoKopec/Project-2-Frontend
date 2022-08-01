import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindByEmalComponent } from './components/find-by-email/find-by-email.component';

const routes: Routes = [{
  path: 'reservations',
  component: FindByEmalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
