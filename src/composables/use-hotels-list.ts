import { storeToRefs } from "pinia";
import { DEFAULT_SORT } from "src/constants/sort-options";
import { HotelsApiService } from "src/services/api-service/hotels-api-service";
import { useHotelListStore } from "src/stores/hotels-list-store";

// const allHotels = [];

// type SelectedHotel = HotelProtocol & HotelDetailsProtocol;

const DEFAULT_PAGE = 1;

export function useHotelsList() {
  const store = useHotelListStore();
  const storeData = storeToRefs(store);

  let nextPage = DEFAULT_PAGE;

  const fetchHotels = async () => {
    const hotelsApiService = new HotelsApiService();
    const hotelResponse = await hotelsApiService.getHotels({
      page: nextPage,
      itemsPerPage: 20,
      orderBy: DEFAULT_SORT,
    });

    store.updateHotels(hotelResponse.data);
    nextPage = hotelResponse.next ?? DEFAULT_PAGE;
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
