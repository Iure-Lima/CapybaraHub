import { RoomCard } from "./room.model"

export type CacheBooking = {
  room: RoomCard,
  selectDate: Date[],
  guest: string,
  totalPrice: string,
  totalNights: number,
  totalPriceWithNights:number
}
