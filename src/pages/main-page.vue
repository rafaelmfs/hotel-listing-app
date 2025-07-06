<script lang="ts" setup>
import mainPageHeader from '../components/main-page/main-page-header.vue';
import HotelCard from "../components/hotels/hotel-card.vue";
import MainPageSortSelection from '../components/main-page/main-page-sort-section.vue';
</script>

<template>
  <div class="main-page column items-center gap-6">
    <main-page-header></main-page-header>
    <main-page-sort-selection></main-page-sort-selection>

    <ul class="hotels-list">
      <li>
        <hotel-card></hotel-card>
      </li>
      <li>
        <hotel-card></hotel-card>
      </li>
      <li>
        <hotel-card></hotel-card>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .main-page{
    width: 100%;
    max-width: 1200px;

  }

  .hotels-list{
    width: 100%;
    background-color: #FFF;

    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    padding: 3rem;
    margin-top: -3rem;
    list-style: none;

    li{
      width: 100%;
    }

    li + li{
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba($info-100, 0.6);
    }
  }
</style>
