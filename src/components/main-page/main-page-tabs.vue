<script setup lang="ts">
  const tab = defineModel<string>()
</script>

<template>
  <q-tabs
    v-model="tab"
    class="main-page__header__tabs"
    active-color="primary-100"
    indicator-color="primary-100"
    align="left"
    no-caps
  >
    <q-tab content-class="main-page__header__tabs__content row gap-3" icon="flight_takeoff" :disable="true" :ripple="false" name="mails" label="Aéreo" />
    <q-tab content-class="main-page__header__tabs__content row gap-3" icon="hotel"  :ripple="false" name="hotel" label="Hotel" />
    <q-tab content-class="main-page__header__tabs__content row gap-3" icon="directions_car" :disable="true" :ripple="false" name="movies" label="Carro" />
    <q-tab content-class="main-page__header__tabs__content row gap-3" icon="directions_bus" :disable="true" :ripple="false" name="movies" label="Ônibus" />
  </q-tabs>
</template>

<style lang="scss">
  .main-page__header__tabs{
    color: $info-400;

    &:disabled{
      color: $info-300;
    }

     .q-tab{
      min-height: 3rem;

      &__label{
        font-weight: 600;
      }
    }
  }
</style>
