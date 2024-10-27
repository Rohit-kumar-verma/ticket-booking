**Train Coach Seat Booking Application**

  ****Overview****
  
  This application provides a streamlined way to book seats in a single coach of a train with a total of 80 seats, arranged in rows to optimize passenger seating. Users can select between 1 to 7 seats per booking request, with an emphasis on reserving seats in the same row when available.

  **Features**
  
**Seat Layout:** 

80 seats organized in 12 rows: 11 rows with 7 seats each and 1 row with 3 seats.

**Booking Options:**

Users can book between 1 and 7 seats per request.

Multiple bookings are allowed until all seats are reserved.

**Priority-Based Booking:**

**Same Row Priority:** Seats are prioritized within the same row for each booking.

**Nearby Seats:** If seats in a single row are insufficient, the closest available seats are assigned.

**User-Friendly Display:**

Seat availability and booking status are shown visually, distinguishing booked from unbooked seats.

**Functionality**

**Booking Process:**

  User enters the desired number of seats.
  
  The system checks seat availability, attempting to book all seats in a single row or, if necessary, in nearby rows.
  
  Booked seat numbers are displayed to the user, along with an updated view of the seat layout.

**Seat Display:**
A visual layout shows seat availability, with colors or icons to indicate booked and unbooked seats.

**Database Structure**

The application uses a simple database structure to store seat information:

    seats Table:
    seat_id (INT): Unique identifier for each seat.
    row_number (INT): The row in which the seat is located.
    seat_number (INT): The seat number within the row.
    is_booked (BOOLEAN): Indicates if the seat is booked.
  
To clone and run the project locally, refer to the setup instructions in INSTALL.md.

**How to Use**


Enter the number of seats to book (1–7).

View the booked seat numbers and the updated seating layout.
