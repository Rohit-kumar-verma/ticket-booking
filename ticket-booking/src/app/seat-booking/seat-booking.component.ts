import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-booking',
  standalone: true, // Indicates this component can be used independently
  imports: [CommonModule, FormsModule], // Imports required Angular modules
  templateUrl: './seat-booking.component.html', // HTML template for this component
  styleUrls: ['./seat-booking.component.css'] // Optional CSS for this component
})
export class SeatBookingComponent {
  rows = 12; // Number of rows: 11 rows of 7 seats and 1 row with 3 seats
  seatsPerRow = 7; // Seats in each row, except the last row
  lastRowSeats = 3; // Seats in the last row
  totalSeats = 80; // Total seats
 // Tracks the current count of booked seats

 seatCount: number | null = null;

  seats: Array<{ row: number; seatNumber: number; booked: boolean }> = []; // Array to store seat details
  bookedSeats: number[] = []; // Array to store booked seat numbers

  constructor() {
    this.initializeSeats(); // Initialize seats when the component is created
  }

  // Function to initialize the seats based on rows and seats per row
  initializeSeats() {
    let seatCounter = 1; // Counter to assign seat numbers
    for (let i = 1; i <= this.rows; i++) {
      const seatsInThisRow = i === this.rows ? this.lastRowSeats : this.seatsPerRow; // Check if last row for seat count
      for (let j = 1; j <= seatsInThisRow; j++) {
        this.seats.push({ row: i, seatNumber: seatCounter, booked: false }); // Push each seat with row, seat number, and booked status
        seatCounter++; // Increment seat counter
      }
    }
  }

  // Function to book seats based on the number requested
  bookSeats(numSeats: number) {
    if (numSeats < 1 || numSeats > 7) { // Validate seat count
      alert('You can only reserve between 1 and 7 seats at a time.');
      return;
    }
    const availableSeats = this.seats.filter((seat) => !seat.booked); // Filter unbooked seats
    // Find seats either in the same row or nearby, depending on availability
    const possibleSeats =
      this.findSeatsInRow(numSeats, availableSeats) ||
      this.findNearbySeats(numSeats, availableSeats);

    if (possibleSeats.length < numSeats) { // Check if enough seats are available
      alert('Not enough seats available');
      return;
    }

    // Book the seats and update the bookedSeats array
    possibleSeats.forEach((seat) => (seat.booked = true));
    this.bookedSeats = possibleSeats.map((seat) => seat.seatNumber);

    this.seatCount = null; // Reset seatCount to clear input field

  }

  // Helper function to find available seats within the same row
  findSeatsInRow(numSeats: number, availableSeats: any[]) {
    for (let i = 1; i <= this.rows; i++) {
      const seatsInRow = availableSeats.filter((seat) => seat.row === i); // Filter seats by row
      if (seatsInRow.length >= numSeats) { // Check if enough seats are available in this row
        return seatsInRow.slice(0, numSeats); // Return the seats if found
      }
    }
    return null; // Return null if not enough seats in any row
  }

  // Helper function to find seats located close together if not enough in the same row
  findNearbySeats(numSeats: number, availableSeats: any[]) {
    return availableSeats.slice(0, numSeats); // Simply take the first `numSeats` from available seats
  }
  
}
