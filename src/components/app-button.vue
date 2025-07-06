<script setup lang="ts">
  const props = defineProps<{
    rounded?: boolean
  }>()
</script>

<template>
  <button :class="{'app-button': true, 'app-button--rounded': props.rounded}">
    <slot />
  </button>
</template>

<style lang="scss">
  .app-button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    background-color: $primary-100;
    color: #FFF;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s;
    border: 1px solid $primary-100;
    box-shadow: 1px 1px 8px #00000060;
    font-size: 0.875rem;

    &--rounded{
      border-radius: 9999px;
    }

    &:hover{
      cursor: pointer;
      background-color: $primary-200;
    }
  }
</style>
