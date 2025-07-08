import type { HotelDetailsProtocol } from "src/protocols/hotels-protocol";
import { HotelsApiService } from "src/services/api-service/hotels-api-service";
import { ref } from "vue";

export function useFetchHotelDetails() {
  const isLoading = ref(true);
  const hotelDetails = ref<HotelDetailsProtocol>();

  async function fetchHotel(id: number) {
    try {
      const hotelsApiService = new HotelsApiService();
      const { hotel } = await hotelsApiService.getById(id);

      hotelDetails.value = hotel;
    } catch (err) {
      console.error(err);
      throw new Error("Fetch hotel details error!");
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    hotelDetails,
    fetchHotel,
  };
}
