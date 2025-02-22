export interface RoomCard {
  _id: string;
  name:string;
  hotel: string,
  roomTypeId: string,
  pricePerNight: number | {$numberDecimal: string},
  roomNumber: number,
  status:status
  images: string[]
  rating: number;
}

type status = "Available" | "Occupied" | "Maintenance"
