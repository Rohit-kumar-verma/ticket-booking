
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatBookingService } from './seat-booking/seat-booking.service';

@NgModule({
  imports: [
    BrowserModule,
    // Other modules you might need
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  // bootstrap: []
  // declarations: [SeatBookingComponent],
  providers: [SeatBookingService],
  bootstrap: [],
})
export class AppModule {}
