export type Booking = {
  _id?:string;
  customer: string;
  hotel: string;
  room: string;
  checkInDate: string;
  checkoutDate: string;
  totalPrice: string;
  status: BookingStatus;
}

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled"
