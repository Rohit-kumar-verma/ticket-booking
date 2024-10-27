import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'] // If you have styles
})
export class SeatBookingComponent {
  rows = 12; // 10 rows of 7 seats and 1 row of 3 seats
  seatsPerRow = 7;
  lastRowSeats = 3;
  totalSeats = 80;
  seatCount=0

  seats: Array<{ row: number; seatNumber: number; booked: boolean }> = [];
  bookedSeats: number[] = [];

  constructor() {
    this.initializeSeats();
  }

  initializeSeats() {
    let seatCounter = 1;
    for (let i = 1; i <= this.rows; i++) {
      const seatsInThisRow =
        i === this.rows ? this.lastRowSeats : this.seatsPerRow;
      for (let j = 1; j <= seatsInThisRow; j++) {
        this.seats.push({ row: i, seatNumber: seatCounter, booked: false });
        seatCounter++;
      }
    }
  }

  bookSeats(numSeats: number) {
    if (numSeats < 1 || numSeats > 7) {
      alert('You can only reserve between 1 and 7 seats at a time.');
      return;
    }
    const availableSeats = this.seats.filter((seat) => !seat.booked);
    const possibleSeats =
      this.findSeatsInRow(numSeats, availableSeats) ||
      this.findNearbySeats(numSeats, availableSeats);

    if (possibleSeats.length < numSeats) {
      alert('Not enough seats available');
      return;
    }

    possibleSeats.forEach((seat) => (seat.booked = true));
    this.bookedSeats = possibleSeats.map((seat) => seat.seatNumber);
  }

  findSeatsInRow(numSeats: number, availableSeats: any[]) {
    for (let i = 1; i <= this.rows; i++) {
      const seatsInRow = availableSeats.filter((seat) => seat.row === i);
      if (seatsInRow.length >= numSeats) {
        return seatsInRow.slice(0, numSeats);
      }
    }
    return null;
  }

  findNearbySeats(numSeats: number, availableSeats: any[]) {
    return availableSeats.slice(0, numSeats);
  }
}
