import debounce from "lodash.debounce";
import { storeToRefs } from "pinia";
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from "src/constants/pagination-constants";
import type { HotelProtocol } from "src/protocols/hotels-protocol";
import type { FindByCityParams } from "src/protocols/hotels-service-protocol";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";
import {
  HotelsApiService,
  type GetHotelsParams,
} from "src/services/api-service/hotels-api-service";
import { useHotelListStore } from "src/stores/hotels-list-store";
import { watch } from "vue";

const hotelsApiService = new HotelsApiService();

export function useFetchHotelList() {
  const store = useHotelListStore();

  const {
    hotels,
    orderBy,
    orderByType,
    searchTerm,
    selectedCity,
    currentPage,
  } = storeToRefs(store);

  function setHotels(items: HotelProtocol[]) {
    hotels.value = items;
  }

  function appendHotels(items: HotelProtocol[]) {
    hotels.value.push(...items);
  }

  async function fetchHotels({
    orderByName = orderBy.value?.value,
    page = currentPage.value,
    ...params
  }: PaginationProtocol): Promise<HotelProtocol[]> {
    const hasCityId = !!selectedCity.value?.value;

    const makeParams = (): GetHotelsParams | FindByCityParams => {
      const baseParams = {
        orderByName,
        orderByType: orderByType.value,
        term: searchTerm.value,
        page,
        ...params,
      };

      return hasCityId
        ? { ...baseParams, cityId: Number(selectedCity.value!.value) }
        : baseParams;
    };

    const source = selectedCity.value?.value
      ? () => hotelsApiService.findByCity(makeParams() as FindByCityParams)
      : () => hotelsApiService.getHotels(makeParams());

    const hotels = await source();
    currentPage.value = page + 1;

    if (page === DEFAULT_PAGE) {
      setHotels(hotels);
      return hotels;
    }

    appendHotels(hotels);
    return hotels;
  }

  const fetchDebounce = debounce(
    () =>
      fetchHotels({
        page: DEFAULT_PAGE,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
        orderByName: orderBy.value.value,
        orderByType: orderByType.value,
      }),
    500
  );

  watch(orderBy, async (newOrder) => {
    await fetchHotels({
      page: DEFAULT_PAGE,
      itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
      orderByName: String(newOrder?.value),
      orderByType: orderByType.value,
    });
  });

  watch(searchTerm, fetchDebounce);

  return {
    fetchHotels,
  };
}
