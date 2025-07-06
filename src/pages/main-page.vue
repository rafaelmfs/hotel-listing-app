<script lang="ts" setup>
import mainPageHeader from '../components/main-page/main-page-header.vue';
import HotelCard from "../components/hotels/hotel-card.vue";
import MainPageSortSelection from '../components/main-page/main-page-sort-section.vue';
</script>

<template>
  <div class="main-page">
    <main-page-header></main-page-header>
    <main-page-sort-selection></main-page-sort-selection>

    <ul class="hotels-list">
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

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;
  }

  .hotels-list{
    width: 100%;
    height: 100vh;
    background-color: #FFF;

    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    padding: 3rem;
    margin-top: -3rem;
    list-style: none;

    li{
      width: 100%;
    }
  }
</style>
