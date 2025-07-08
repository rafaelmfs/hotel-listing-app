<script setup lang="ts">
import { ref } from 'vue';

  const props = defineProps<{
    images: string[]
  }>()
  const currentImage = ref<number>(0)
</script>

<template>
  <q-carousel
    v-model="currentImage"
    transition-prev="jump-right"
    transition-next="jump-left"
    control-color="white"
    control-type="regular"
    control-text-color="primary-100"
    prev-icon="chevron_left"
    next-icon="chevron_right"
    padding
    arrows
    infinite
    swipeable
    animated
    autoplay
    height="inherit"
    class="bg-primary-200 text-white shadow-1 rounded-borders"
  >
    <q-carousel-slide v-for="(image, index) in props.images" :img-src="image" :name="index" :key="image" />
  </q-carousel>
</template>

<style lang="scss">
  .q-carousel__control{
    align-items: end;
  }

  .q-carousel__arrow .q-icon{
    font-size: 1.25rem;
  }
</style>
