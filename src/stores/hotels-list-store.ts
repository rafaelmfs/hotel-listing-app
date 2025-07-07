import debounce from "lodash.debounce";
import { defineStore } from "pinia";
import { sortOptions } from "src/constants/sort-options";
import type { HotelProtocol } from "src/protocols/hotels-protocol";
import type { FindByCityParams } from "src/protocols/hotels-service-protocol";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";
import type { OptionProtocol } from "src/protocols/select-option-protocol";
import {
  HotelsApiService,
  type GetHotelsParams,
} from "src/services/api-service/hotels-api-service";
import { computed, ref, watch } from "vue";

const hotelsApiService = new HotelsApiService();

type OrderByOptions = { label: string; value: string };

export const useHotelListStore = defineStore("hotels", () => {
  const hotels = ref<HotelProtocol[]>([]);
  const selectedHotel = ref<number | null>(null);
  const orderByProperty = ref<OrderByOptions>(sortOptions[0] as OrderByOptions);
  const selectedCity = ref<OptionProtocol>();
  const orderByType = computed<"desc" | "asc">(() =>
    orderByProperty.value.value === "stars" ? "desc" : "asc"
  );
  const searchTerm = ref<string>();

  function setHotels(items: HotelProtocol[]) {
    hotels.value = items;
  }

  function appendHotels(items: HotelProtocol[]) {
    hotels.value.push(...items);
  }

  async function fetchHotels({
    orderByName = orderByProperty.value?.value,
    ...params
  }: PaginationProtocol): Promise<HotelProtocol[]> {
    const hasCityId = !!selectedCity.value?.value;

    const makeParams = (): GetHotelsParams | FindByCityParams => {
      const baseParams = {
        orderByName,
        orderByType: orderByType.value,
        term: searchTerm.value,
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

    if (params.page === 1) {
      setHotels(hotels);
      return hotels;
    }

    appendHotels(hotels);
    return hotels;
  }

  const fetchDebounce = debounce(
    () =>
      fetchHotels({
        page: 1,
        itemsPerPage: 20,
        orderByName: orderByProperty.value.value,
        orderByType: orderByType.value,
      }),
    500
  );

  watch(orderByProperty, async (newOrder) => {
    await fetchHotels({
      page: 1,
      itemsPerPage: 20,
      orderByName: String(newOrder?.value),
      orderByType: orderByType.value,
    });
  });

  watch(searchTerm, fetchDebounce);

  return {
    searchTerm,
    hotels,
    selectedHotel,
    orderBy: orderByProperty,
    selectedCity,
    fetchHotels,
  };
});
