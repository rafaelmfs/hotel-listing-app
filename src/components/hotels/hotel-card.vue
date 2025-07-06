<script setup lang="ts">
import { ref } from 'vue';
import highlightInfo from '../highlight-info.vue';
import appButton from '../app-button.vue';

  const ratingModel = ref(3)

</script>

<template>
  <div class="hotel-card__container">
    <div class="hotel-card__tumb">
      <q-img
        src="https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_10.JPG"
        spinner-color="white"
        height="inherit"
      />
      <div class="hotel-card__ratings">
        <q-rating
          v-model="ratingModel"
          size="1.2em"
          color="info-500"
          color-selected="primary-200"
          readonly
        />
      </div>
    </div>
    <div class="hotel-card__content">
      <div class="hotel-card__details column justify-between">
        <highlight-info title="Nacional Inn Belo Horizonte" subtitle="Coração De Jesus"></highlight-info>

        <div class="hotel-card__details__info column gap-2">
          <div class="hotel-card__amenities row gap-2">
            <span class="hotel-card__amenities__icon row items-center justify-center" title="search">
              <q-icon
                name="search"
                title="search"
              />
            </span>
          </div>
          <span class="hotel-card__details__additionals row items-center  gap-2 text-success-100">
            <q-icon name="attach_money" />
            Reembolsável
          </span>
          <span class="hotel-card__details__additionals row items-center gap-2 text-success-100">
            <q-icon name="local_cafe" />
            Café da manhã
          </span>
        </div>
      </div>
      <div class="hotel-card__price-details gap-8 column">
        <div class="hotel-card__price-details__daily column">
          <span class="text-info-300 text-weight-bold">Por dia</span>
          <strong class="text-primary-100 price">R$ 100</strong>
          <span class="text-info-100">No booking R$ 115</span>
        </div>
        <div class="hotel-card__price-details__daily text-info-300">
          <div class="grid-2-cols">
            <span>Diarias</span>
            <span class="text-right">2x R$ 100,00</span>
          </div>
          <div class="grid-2-cols">
            <span>Taxas</span>
            <span class="text-right">2x R$ 80,00</span>
          </div>
          <div class="grid-2-cols">
            <span>Total</span>
            <span class="text-right">R$ 360</span>
          </div>
        </div>
        <app-button rounded>Ver detalhes</app-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.hotel-card{
  &__container{
    width: 100%;
    height: 300px;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 25% auto;
    overflow: hidden;
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
  }

  &__ratings{
    padding: 0.5rem 1rem;
    background-color: #FFFFFF;
    border-radius: 16px;
    position: absolute;


    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
  }

  &__content{
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr minmax(200px, 20%);
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
