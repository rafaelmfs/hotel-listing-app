export type HotelProtocol = {
  id: string;
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
  placeId: string;
};

export type HotelDetailsProtocol = {
  id: string[];
  description: string;
  fullAddress: string;
  images: string[];
};
