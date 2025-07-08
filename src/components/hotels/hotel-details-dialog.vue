<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { AmenitiesTypes } from 'src/constants/amenitites-types';
import { useHotelListStore } from 'src/stores/hotels-list-store';
import { computed, watch } from 'vue';
import appCarousel from '../app-carousel.vue';
import { useFetchHotelDetails } from 'src/composables/use-fetch-hotel-details';

  const store = useHotelListStore()
  const { selectedHotel } = storeToRefs(store)
  const { hotelDetails, isLoading, fetchHotel } = useFetchHotelDetails()

  const isOpen = computed(() => {
    return selectedHotel.value !== null
  })

  const hotelAmenities = computed(() => selectedHotel.value?.amenities?.map((item) => ({
    iconName: AmenitiesTypes?.[item as keyof typeof AmenitiesTypes],
    title: item
  })))

  function onClose(){
    selectedHotel.value = null
  }

  watch(selectedHotel, async(newValue) => {
    if(!newValue){
      return
    }

    await fetchHotel(newValue?.id)
  })

</script>

<template>
  <q-dialog square medium maximized  full-height class="modal" :model-value="isOpen" @update:model-value="onClose" position="right">
    <div class="details-dialog__container column no-wrap gap-6">
      <div class="details-dialog__header row no-wrap items-center justify-between">
        <strong class="text-h5">{{ selectedHotel?.name }}</strong>
        <button @click="onClose" class="details-dialog__header__close">
          <q-icon name="close" />
        </button>
      </div>
      <div class="details-dialog__thumbs">
        <q-skeleton v-if="isLoading" />
        <app-carousel v-else :images="hotelDetails?.images ?? []"></app-carousel>

      <div class="details-dialog__thumbs__ratings">
        <q-rating
          :model-value="selectedHotel?.stars ?? 0"
          size="1.2em"
          color="info-500"
          color-selected="primary-200"
          :style="{
            flexWrap: 'no-wrap'
          }"
          readonly
        />
      </div>
      </div>
      <div class="details-dialog__content column gap-4">
        <div class="details-dialog__content__data gap-2 column">
          <span class="text-h5 text-primary-100">Comodidades</span>
          <div class="row gap-2">
            <div class="row items-center no-wrap gap-2 text-info-400 col-sm-6 col-md-4" v-for="amenities in hotelAmenities" :key="amenities.title" >
              <q-icon size="1rem" :name="amenities.iconName" />
              <span>{{ amenities.title }}</span>
            </div>
          </div>
        </div>
        <div class="details-dialog__content__data gap-2 column">
          <span class="text-h5 text-primary-100">Localização</span>
          <p class="text-body1 text-info-400">{{ hotelDetails?.fullAddress}}</p>
        </div>
        <div class="details-dialog__content__data gap-2 column">
          <span class="text-h5 text-primary-100">Sobre o hotel {{ selectedHotel?.name}}</span>
          <p class="text-body1 text-info-400">
            {{  hotelDetails?.description }}
          </p>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<style lang="scss">
  .q-dialog__inner--maximized {
    max-width: 40%;

    @media(max-width: 991px) {
      max-width: 80%;
    }

    @media(max-width: 425px) {
      max-width: 100%;
    }
  }
  .details-dialog{
    &__container{
      background-color: #FFF;
      padding: 1rem 2rem;
      color: $info-500;
      width: 100%;
      max-height: 100vh;

      overflow-y: auto;
    }

    &__header{
      &__close{
        background-color: transparent;
        border: 0;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        color: $info-500;

        &:hover{
          cursor: pointer;
          color: $info-600;

          filter: drop-shadow(1px 1px 6px rgba($info-600, 0.6));
        }
        &:focus{
          filter: drop-shadow(1px 1px 6px rgba($info-600, 0.6));
        }
      }
    }

    &__thumbs{
      border-radius: 12px;
      overflow: hidden;
      min-height: 400px;
      height: inherit;
      position: relative;

      &__ratings{
        padding: 0.5rem 1rem;
        background-color: #FFFFFF;
        border-radius: 16px;
        position: absolute;
        top: 1rem;
        left: 1rem;

        .q-rating.row{
          flex-wrap: nowrap;
        }
      }
    }
  }
</style>
