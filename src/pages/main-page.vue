<script lang="ts" setup>
import { useHotelsList } from 'src/composables/use-hotels-list';
import mainPageHeader from '../components/main-page/main-page-header.vue';
import MainPageSortSelection from '../components/main-page/main-page-sort-section.vue';
import hotelCard from 'src/components/hotels/hotel-card.vue';
import { computed, onBeforeMount, onMounted } from 'vue';

const { fetchHotels, store } = useHotelsList()
const { hotels } = store

const isEmpty = computed(() => hotels.value.length === 0)

onBeforeMount(() => fetchHotels())

onMounted(() => { console.log(store.hotels.value)})
</script>

<template>
  <div class="main-page column items-center gap-6">
    <main-page-header></main-page-header>
    <main-page-sort-selection></main-page-sort-selection>

    <ul class="hotels-list">
      <li v-if="isEmpty" class="empty-list">
        Nenhum resultado encontrado.
      </li>

      <template v-else>
        <li v-for="hotel in hotels" :key="hotel.id">
          <hotel-card :hotel></hotel-card>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
  .main-page{
    width: 100%;
    max-width: 1200px;

  }

  .hotels-list{
    width: 100%;
    min-height: 50vh;
    background-color: #FFF;

    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    padding: 3rem;
    margin-top: -3rem;
    list-style: none;

    li{
      width: 100%;

      &.empty-list{
        display: flex;
        align-items: center;
        justify-content: center;

        flex: 1;
        padding-top: 2rem;

        font-size: 1.125rem;
        font-weight: 600;
        color: $info-300;
      }
    }

    li + li{
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba($info-100, 0.6);
    }
  }
</style>
