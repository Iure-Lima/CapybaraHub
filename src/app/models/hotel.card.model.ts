export type HotelCard = {
  id: number;
  name: string;
  rating: number;
  location: Location;
  image: string;
};

type Location = {
  street: string;
  city: string;
  state: string;
  country: string;
};
