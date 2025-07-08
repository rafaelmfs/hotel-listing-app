import type { HotelDetailsProtocol } from "src/protocols/hotels-protocol";
import { HotelsApiService } from "../api-service/hotels-api-service";

export class HotelDetailsProxy {
  private static readonly hotels: Map<number, HotelDetailsProtocol> = new Map();

  async getById(id: number): Promise<{ hotel: HotelDetailsProtocol }> {
    let selectedHotel = HotelDetailsProxy.hotels.get(id);

    if (!selectedHotel) {
      const hotelApiService = new HotelsApiService();
      const { hotel } = await hotelApiService.getById(id);

      HotelDetailsProxy.hotels.set(id, hotel);
      selectedHotel = hotel;
    }

    return {
      hotel: selectedHotel,
    };
  }
}
