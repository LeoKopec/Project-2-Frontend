import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { FindByEmalComponent } from './components/find-by-email/find-by-email.component';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';

const routes: Routes = [
  { path: 'reservations', component: FindByEmalComponent },
  { path: 'hotel-search', component: HotelSearchComponent },
  { path: 'edit-reservation', component: EditReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
