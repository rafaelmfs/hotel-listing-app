<script setup lang="ts">
import { ref } from "vue";
import MainPageTabs from "./main-page-tabs.vue";
import MainPageForm from './main-page-form.vue';


const tab = ref("hotel")
</script>

<template>
  <header class="main-page__header">
    <main-page-tabs v-model="tab"></main-page-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="hotel">
        <main-page-form></main-page-form>
      </q-tab-panel>
    </q-tab-panels>
  </header>
</template>

<style lang="scss">
.main-page{
  &__header{
    padding: 0.5rem;
    width: 90%;
    background-color: #FFF;
    border-radius: 16px;
    box-shadow: 1px 6px 16px rgba($info-400, 0.4);
  }
}

</style>
