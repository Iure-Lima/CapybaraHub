import { RoomCard } from "./room.model"

export type CacheBooking = {
  room: RoomCard,
  selectDate: Date[],
  guest: string,
  totalPrice: number,
  totalNights: number,
  totalPriceWithNights:number
}
