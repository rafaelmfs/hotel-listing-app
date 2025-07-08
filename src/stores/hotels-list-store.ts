import { defineStore } from "pinia";
import { DEFAULT_PAGE } from "src/constants/pagination-constants";
import { ORDER_TYPES, sortOptions } from "src/constants/sort-options";
import type { HotelProtocol } from "src/protocols/hotels-protocol";
import type { OptionProtocol } from "src/protocols/select-option-protocol";
import { computed, ref } from "vue";

type OrderByOptions = { label: string; value: string };

export const useHotelListStore = defineStore("hotels", () => {
  const hotels = ref<HotelProtocol[]>([]);
  const currentPage = ref<number>(DEFAULT_PAGE);
  const selectedHotel = ref<HotelProtocol | null>(null);
  const orderByProperty = ref<OrderByOptions>(sortOptions[0] as OrderByOptions);
  const selectedCity = ref<OptionProtocol>();
  const orderByType = computed<ORDER_TYPES>(() =>
    orderByProperty.value.value === "stars"
      ? ORDER_TYPES.DESCENDING
      : ORDER_TYPES.ASCENDING
  );
  const searchTerm = ref<string>();

  return {
    searchTerm,
    hotels,
    selectedHotel,
    orderBy: orderByProperty,
    selectedCity,
    orderByType,
    currentPage,
  };
});
