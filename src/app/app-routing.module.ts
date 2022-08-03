import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindByEmalComponent } from './components/find-by-email/find-by-email.component';
import { HotelRoomsComponent } from './components/hotel-rooms/hotel-rooms.component';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';

const routes: Routes = [
  { path: 'reservations', component: FindByEmalComponent },
  { path: 'hotel-search', component: HotelSearchComponent },
  { path: 'hotel-rooms', component: HotelRoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
