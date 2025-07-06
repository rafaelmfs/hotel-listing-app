<script setup lang="ts">
  const props = defineProps<{
    title: string,
    subtitle: string
  }>()
</script>

<template>
  <div class="highlight__container">
    <strong class="highlight__title">{{ props.title }}</strong>
    <span class="highlight__subtitle">{{ props.subtitle }}</span>
  </div>
</template>

<style lang="scss">
  .highlight{
    &__container{
      display: flex;
      flex-direction: column;
    }

    &__title{
      font-size: 1.125rem;
      color: $info-400;
    }

    &__subtitle{
      font-size: 0.875rem;
      font-weight:400;
      color: $info-400;
    }
  }
</style>


