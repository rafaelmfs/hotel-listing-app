<script setup lang="ts">
import SortSelect from "../form/sort-select.vue";
import SearchInput from '../form/search-input.vue';
import { useHotelListStore } from 'src/stores/hotels-list-store';
import { storeToRefs } from 'pinia';

  const store = useHotelListStore()
  const { searchTerm } = storeToRefs(store)


</script>

<template>
    <div class="sort-section row items-center justify-center gap-3">
      <sort-select></sort-select>
      <div class="sort-section__search-input">
        <search-input placeholder="nome do hotel" v-model="searchTerm"></search-input>
      </div>
    </div>
</template>

<style lang="scss">
 .sort-section{
    width: 100%;
    .q-field--borderless.q-field--dense .q-field__control{
      padding: 0.25rem 1rem;
    }

    .q-field__native{
      color: $info-500;
    }

    .q-field__control{
      min-width: 246px;
    }

    &__select{
      border: 1px solid transparent;
      box-shadow: 1px 2px 6px -2px rgba($info-600, 0.6);
      border-radius: 8px;
      z-index: 10;

      &:focus-within{
        box-shadow: 1px 1px 16px -4px rgba($primary-200, 0.6);
      }
    }

    &__search-input{
      background-color: #FFF;
      padding: 0.25rem;
      border-radius: 12px;

      box-shadow: 1px 2px 8px rgba($info-600, 0.3);
      z-index: 10;

      &:focus-within{
        box-shadow: 1px 1px 16px -4px rgba($primary-200, 0.6);
      }
    }
  }
</style>
