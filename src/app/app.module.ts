import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FindByEmalComponent } from './components/find-by-email/find-by-email.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { HotelRoomsComponent } from './components/hotel-rooms/hotel-rooms.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
// import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';

import { VisualfrontComponent } from './visualfront/visualfront.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FindByEmalComponent,
    HotelListComponent,
    HotelSearchComponent,
    HotelRoomsComponent,
    RoomListComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    CommonModule,
    FormsModule,
    TableModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
