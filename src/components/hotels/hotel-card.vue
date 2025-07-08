<script setup lang="ts">
import highlightInfo from '../highlight-info.vue';
import AppButton from '../app-button.vue';
import type { HotelProtocol } from 'src/protocols/hotels-protocol';
import { AmenitiesTypes } from 'src/constants/amenitites-types';
import { computed } from 'vue';
import { formatCurrencyNumber } from 'src/utils/format-currency-number';
import { useHotelListStore } from 'src/stores/hotels-list-store';
import { storeToRefs } from 'pinia';

  const props = defineProps<{
    hotel: HotelProtocol
  }>()
  const store = useHotelListStore()
  const { selectedHotel } = storeToRefs(store)

  const { hotel } = props

  const hotelAmenities = computed(() => hotel?.amenities?.map((item) => ({
    iconName: AmenitiesTypes?.[item as keyof typeof AmenitiesTypes],
    title: item
  })))

  const currencyProperties = ['tax', 'dailyPrice', 'totalPrice'] as const
  const [tax, dailyPrice, totalPrice] = currencyProperties.map((value) => formatCurrencyNumber(hotel[value]))

  function handleShowDetails(){
    selectedHotel.value = hotel
  }

</script>

<template>
  <div class="hotel-card__container">
    <div class="hotel-card__tumb">
      <q-img
        :src="hotel.thumb"
        spinner-color="white"
        height="100%"
      />
      <div class="hotel-card__ratings">
        <q-rating
          v-model="hotel.stars"
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
    <div class="hotel-card__content">
      <div class="hotel-card__details column justify-between">
        <highlight-info :title="hotel.name" :subtitle="hotel.district"></highlight-info>

        <div class="hotel-card__details__info column gap-2">
          <div class="hotel-card__amenities row gap-2">
            <span v-for="amenities in hotelAmenities" :title="amenities.title" :key="amenities.title" class="hotel-card__amenities__icon row items-center justify-center">
              <q-icon
                :name="amenities.iconName"
              />
            </span>
          </div>
          <span v-if="hotel.hasRefundableRoom" class="hotel-card__details__additionals row items-center  gap-2 text-success-100">
            <q-icon name="attach_money" />
            Reembolsável
          </span>
          <span v-if="hotel.hasBreakFast" class="hotel-card__details__additionals row items-center gap-2 text-success-100">
            <q-icon name="local_cafe" />
            Café da manhã
          </span>
        </div>
      </div>
      <div class="hotel-card__price-details gap-8 column">
        <div class="hotel-card__price-details__daily column">
          <span class="text-info-300 text-weight-bold">Por dia</span>
          <strong class="text-primary-100 price">{{ dailyPrice  }}</strong>
          <span class="text-info-100">No booking R$ 115</span>
        </div>
        <div class="hotel-card__price-details__daily text-info-300">
          <div class="grid-2-cols">
            <span>Diarias</span>
            <span class="text-right">{{ dailyPrice }}</span>
          </div>
          <div class="grid-2-cols">
            <span>Taxas</span>
            <span class="text-right">{{ tax }}</span>
          </div>
          <div class="grid-2-cols">
            <span>Total</span>
            <span class="text-right">{{  totalPrice}}</span>
          </div>
        </div>
        <app-button @click="handleShowDetails"  rounded>Ver detalhes</app-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.hotel-card{
  &__container{
    width: 100%;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 25% auto;
    overflow: hidden;

    @media(max-width: 991px){
      border-radius: 12px;
      display: flex;
      flex-direction: column;
    }
  }

  &__tumb{
    object-fit: cover;
    overflow: hidden;
    height: inherit;
    position: relative;

    img{
      scale: 1.1;
      transition: scale 0.2s;
    }

    &:hover{
      img{
        scale: 1;
      }
    }

    @media(max-width: 991px){
      max-height: 300px;
    }
  }

  &__ratings{
    padding: 0.5rem 1rem;
    background-color: #FFFFFF;
    border-radius: 16px;
    position: absolute;


    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;

    .q-rating.row{
      flex-wrap: nowrap;
    }
  }

  &__content{
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr minmax(200px, 20%);

    @media(max-width: 768px){
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }


  &__amenities{
    &__icon{
      border-radius: 50%;
      color: $info-500;
      background-color: rgba($info-100, 0.5);
      font-size: 1rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__price-details{
    .price{
      font-size: 1.5rem;
    }
  }
}
</style>
