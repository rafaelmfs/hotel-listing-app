export type HotelProtocol = {
  id: number;
  name: string;
  stars: number;
  totalPrice: number;
  dailyPrice: number;
  tax: number;
  thumb: string;
  amenities: string[];
  hasBreakFast?: boolean;
  hasRefundableRoom?: boolean;
  district: string;
  placeId: number;
};

export type HotelDetailsProtocol = {
  id: string[];
  description: string;
  fullAddress: string;
  images: string[];
};
