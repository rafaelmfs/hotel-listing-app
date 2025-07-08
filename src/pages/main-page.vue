<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useHotelListStore } from 'src/stores/hotels-list-store';
import MainPageHeader from '../components/main-page/main-page-header.vue';
import MainPageSortSelection from '../components/main-page/main-page-sort-section.vue';
import hotelCard from 'src/components/hotels/hotel-card.vue';
import HotelDetailsDialog from 'src/components/hotels/hotel-details-dialog.vue';
import { useFetchHotelList } from 'src/composables/use-fetch-hotel-list';
import { DEFAULT_PAGE } from 'src/constants/pagination-constants';

const store = useHotelListStore()
const { hotels, selectedCity, currentPage } = storeToRefs(store)
const { fetchHotels } = useFetchHotelList()

const isEmpty = computed(() => hotels.value.length === 0)

const inityRef = ref()

async function onLoad(_: number, done: (stop:boolean) => void){
  try{
    const data = await fetchHotels({  })
    done(data.length === 0)

  }catch(error){
    console.error(error)
    done(true)
  }
}


watch(selectedCity, () => {
  currentPage.value = DEFAULT_PAGE
})

</script>

<template>
  <div class="main-page column items-center gap-4">
    <main-page-header></main-page-header>
    <main-page-sort-selection></main-page-sort-selection>

    <div class="hotels">
      <q-infinite-scroll :ref="inityRef"  @load="onLoad" :offset="250">
        <ul class="hotels__list">
          <li v-if="isEmpty" class="empty-list">
            Nenhum resultado encontrado.
          </li>

          <template v-else>
            <li v-for="hotel in hotels" :key="hotel.id">
              <hotel-card :hotel></hotel-card>
            </li>
          </template>
        </ul>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>

    <hotel-details-dialog></hotel-details-dialog>
  </div>
</template>

<style lang="scss">
  .main-page{
    width: 100%;
    max-width: 1200px;

  }

  .hotels{
    width: 100%;
    min-height: 50vh;
    background-color: #FFF;

    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    padding: 3rem;
    margin-top: -2.5rem;

    @media(max-width: 991px){
      padding: 2rem;
      font-size: 80%;
    }

    &__list{
      list-style: none;
      padding: 0;
    }

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
