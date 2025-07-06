import { defineStore } from "pinia";
import type { HotelProtocol } from "src/protocols/hotels-protocol";
import { ref, type Ref } from "vue";

interface HotelListStore {
  hotels: Ref<HotelProtocol[]>;
  selectedHotel: Ref<number | null>;
  addHotels: (hotels: HotelProtocol[]) => void;
  updateHotels: (hotels: HotelProtocol[]) => void;
  changeSelectedHotel: (selectedHotelId: number | null) => void;
}

export const useHotelListStore = defineStore("hotels", (): HotelListStore => {
  const hotels = ref<HotelProtocol[]>([]);
  const selectedHotel = ref<number | null>(null);

  const addHotels = (receivedHotels: HotelProtocol[]) => {
    hotels.value.push(...receivedHotels);
  };

  const updateHotels = (receivedHotels: HotelProtocol[]) => {
    hotels.value = receivedHotels;
  };

  const changeSelectedHotel = (selectedHotelId: number | null) => {
    selectedHotel.value = selectedHotelId;
  };

  return {
    hotels,
    selectedHotel,
    addHotels,
    updateHotels,
    changeSelectedHotel,
  };
});
