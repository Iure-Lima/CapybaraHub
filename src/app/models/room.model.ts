export interface RoomCard {
  _id: string;
  hotel: string,
  roomTypeId: string,
  pricePerNight: string,
  roomNumber: number,
  status:status
  images: string[]
  rating: number;
}

type status = "Available" | "Occupied" | "Maintenance"
