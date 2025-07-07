import { defineStore } from "pinia";
import { sortOptions } from "src/constants/sort-options";
import type { HotelProtocol } from "src/protocols/hotels-protocol";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";
import type { OptionProtocol } from "src/protocols/select-option-protocol";
import { HotelsApiService } from "src/services/api-service/hotels-api-service";
import { computed, ref, watch } from "vue";

const hotelsApiService = new HotelsApiService();

type OrderByOptions = { label: string; value: string };

export const useHotelListStore = defineStore("hotels", () => {
  const hotels = ref<HotelProtocol[]>([]);
  const selectedHotel = ref<number | null>(null);
  const orderByProperty = ref<OrderByOptions>(sortOptions[0] as OrderByOptions);
  const selectedCity = ref<OptionProtocol>();
  const orderByType = computed(() =>
    orderByProperty.value.value === "stars" ? "desc" : "asc"
  );

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
    const source = selectedCity.value?.value
      ? () =>
          hotelsApiService.findByCity({
            cityId: Number(selectedCity.value?.value),
            orderByName,
            orderByType: orderByType.value,
            ...params,
          })
      : () =>
          hotelsApiService.getHotels({
            orderByName,
            orderByType: orderByType.value,
            ...params,
          });

    const hotels = await source();

    if (params.page === 1) {
      setHotels(hotels);
      return hotels;
    }

    appendHotels(hotels);
    return hotels;
  }

  watch(orderByProperty, async (newOrder) => {
    await fetchHotels({
      page: 1,
      itemsPerPage: 20,
      orderByName: String(newOrder?.value),
      orderByType: orderByType.value,
    });
  });

  return {
    hotels,
    selectedHotel,
    orderBy: orderByProperty,
    selectedCity,
    fetchHotels,
  };
});
