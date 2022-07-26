import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { FindByEmalComponent } from './components/find-by-email/find-by-email.component';
import { HotelRoomsComponent } from './components/hotel-rooms/hotel-rooms.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookReservationComponent } from './components/book-reservation/book-reservation.component';

const routes: Routes = [
  { path: 'reservations', component: FindByEmalComponent },
  { path: 'hotel-search', component: HotelSearchComponent },
  { path: 'hotel-rooms', component: HotelRoomsComponent },
  // { path: 'edit-reservation', component: EditReservationComponent},
  { path: 'error', component: PageNotFoundComponent },
  { path: 'home', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'book-reservation', component: BookReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
