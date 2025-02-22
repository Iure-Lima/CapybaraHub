export type Booking = {
  customer: string;
  hotel: string;
  room: string;
  checkInDate: string;
  checkoutDate: string;
  totalPrice: string;
  status: BookingStatus;
}

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled"
