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
    background-color: white;
    border-radius: 16px;
    box-shadow: 1px 2px 12px rgba($info-600, 0.2);

    &__form{
      display: flex;
      align-items: center;
      justify-content: space-between;

      .q-field{
        max-width: 50%;
      }
    }
  }
}

</style>
