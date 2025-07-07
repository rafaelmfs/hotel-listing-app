<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { sortOptions } from 'src/constants/sort-options';
import { useHotelListStore } from 'src/stores/hotels-list-store';

  const hotelListStore = useHotelListStore()
  const { orderBy } = storeToRefs(hotelListStore)

</script>

<template>
  <q-select
    borderless
    dense
    v-model="orderBy"
    dropdown-icon="keyboard_arrow_down"
    option-label="label"
    option-value="value"
    bg-color="white"
    label-color="primary-200"
    color="primary-200"
    class="sort-section__select"
    :menu-offset="[0, 4]"
    :options="sortOptions"
    :display-value="`Ordernar por: ${orderBy?.label}`"
  >
    <template v-slot:prepend>
      <q-icon name="swap_vert" />

    </template>
  </q-select>
</template>
