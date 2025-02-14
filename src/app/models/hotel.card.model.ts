import { Location } from "./location.model";

export interface HotelCard {
  _id: string;
  name: string;
  email: string;
  phone: string;
  rating: number;
  location: Location;
  image: string;
};
