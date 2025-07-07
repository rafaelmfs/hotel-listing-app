<script setup lang="ts">
import { ref } from 'vue';
import citiesAutocomplete from '../form/cities-autocomplete.vue';
import AppButton from '../app-button.vue';

const selectedCityId = ref<number | null>(null)
</script>

<template>
  <form class="main-page__header__form row items-center justify-between gap-3" @submit.prevent="">
    <cities-autocomplete v-bind:model-value="selectedCityId"></cities-autocomplete>
    <app-button type="submit">
      <q-icon name="search" /> Buscar hotel
    </app-button>
  </form>
</template>

<style lang="scss">
  .main-page__header__form{
    .q-field{
      max-width: 50%;

      @media(max-width: 768px) {
        max-width: 100%;
        width: 100%;
      }
    }

    @media(max-width: 768px) {
      .app-button{
        width: 100%;
      }
    }
  }
</style>
