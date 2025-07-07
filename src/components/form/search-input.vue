<script setup lang="ts">
  const search = defineModel<string>()
</script>

<template>
  <q-input outlined v-model="search" dense>
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<style lang="scss">
  .q-field__control{
    border-radius: 8px!important;
  }
</style>
