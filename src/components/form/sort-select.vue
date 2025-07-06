<script setup lang="ts">
import { sortOptions } from 'src/constants/sort-options';
import type { OptionProtocol } from 'src/protocols/select-option-protocol';

  const model = defineModel<OptionProtocol>({
    default: sortOptions[0]
  })
</script>

<template>
  <q-select
    borderless
    dense
    v-model="model"
    dropdown-icon="keyboard_arrow_down"
    option-label="label"
    option-value="value"
    bg-color="white"
    label-color="primary-200"
    color="primary-200"
    class="sort-section__select"
    :menu-offset="[0, 4]"
    :options="sortOptions"
    :display-value="`Ordernar por: ${model?.label}`"
  >
    <template v-slot:prepend>
      <q-icon name="swap_vert" />
    </template>
  </q-select>
</template>
