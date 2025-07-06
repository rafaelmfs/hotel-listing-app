<script lang="ts" setup>
  import mainPageHeader from '../components/main-page/main-page-header.vue';
</script>

<template>
  <div class="main-page">
    <main-page-header></main-page-header>
  </div>
</template>

<style lang="scss">
  .main-page{
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
