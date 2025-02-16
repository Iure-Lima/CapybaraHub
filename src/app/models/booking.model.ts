export type Booking = {
  customerId: string;
  hotelId: string;
  roomId: string;
  checkInDate: Date;
  checkOutDate: Date;
  totalPrice: string;
  status: Status;
}

type Status = "pending" | "confirmed" | "completed" | "cancelled"
