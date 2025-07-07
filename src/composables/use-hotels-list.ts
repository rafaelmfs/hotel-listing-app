import { storeToRefs } from "pinia";
import { DEFAULT_SORT } from "src/constants/sort-options";
import { HotelsApiService } from "src/services/api-service/hotels-api-service";
import { useHotelListStore } from "src/stores/hotels-list-store";

// const allHotels = [];

// type SelectedHotel = HotelProtocol & HotelDetailsProtocol;

export function useHotelsList() {
  const store = useHotelListStore();
  const storeData = storeToRefs(store);

  const fetchHotels = async (page: number) => {
    const hotelsApiService = new HotelsApiService();
    const hotelResponse = await hotelsApiService.getHotels({
      page,
      itemsPerPage: 20,
      orderBy: DEFAULT_SORT,
    });

    store.addHotels(hotelResponse.data);

    return hotelResponse;
  };

  // const findByName = async () => {};
  // const findById = async () => {};
  // const filterByCity = async () => {};
  // const orderBy = async (order: "stars" | "totalPrice") => {};

  return {
    fetchHotels,
    store: storeData,
  };
}
