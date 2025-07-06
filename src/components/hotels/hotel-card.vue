<script setup lang="ts">
import { ref } from 'vue';
import highlightInfo from '../highlight-info.vue';

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
      <div class="hotel-card__details">
        <div class="hotel-card__details__header">
          <highlight-info title="Nacional Inn Belo Horizonte" subtitle="Coração De Jesus"></highlight-info>
        </div>
        <div class="hotel-card__details__info">
          <div class="hotel-card__amenities">
            <q-icon
              title="asdowlkscklsc askldw"
            />
          </div>
        </div>
      </div>
      <div class="hotel-card__price-details">

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
    grid-template-columns: 1fr 240px;
  }

  &__details{
  }

  &__header{}

  &__price-details{
  }
}
</style>
