export type Booking = {
  customer: string;
  hotel: string;
  room: string;
  checkInDate: string;
  checkoutDate: string;
  totalPrice: string;
  status: Status;
}

type Status = "pending" | "confirmed" | "completed" | "cancelled"
