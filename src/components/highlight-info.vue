<script setup lang="ts">
  const props = defineProps<{
    title: string,
    subtitle: string
  }>()
</script>

<template>
  <div class="highlight__container column">
    <strong class="highlight__title text-info-400">{{ props.title }}</strong>
    <span class="highlight__subtitle text-info-400">{{ props.subtitle }}</span>
  </div>
</template>

<style lang="scss">
  .highlight{
    &__title{
      font-size: 1.125rem;
    }

    &__subtitle{
      font-size: 0.875rem;
      font-weight:400;
    }
  }
</style>


