<script setup lang="ts">
import { ref } from 'vue';
import citiesAutocomplete from '../form/cities-autocomplete.vue';
import formButton from '../form/form-button.vue';

const selectedCityId = ref<number | null>(null)
</script>

<template>
  <form class="main-page__header__form" @submit.prevent="">
    <cities-autocomplete v-bind:model-value="selectedCityId"></cities-autocomplete>
    <form-button type="submit">
      <q-icon name="search" /> Buscar hotel
    </form-button>
  </form>
</template>
