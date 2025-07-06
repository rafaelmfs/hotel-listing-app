<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { CitiesApiProxy } from 'src/services/proxy/cities-api-proxy';

type Option = { label: string, value: number}

const allOptions: Option[] = []

const model = defineModel()
const options = ref<Option[]>([])

function filterOptions(term: string, update: (callback: VoidFunction) => void){
  if(term.length < 3){
    update(() => options.value = allOptions)
    return
  }

  return update(() => {
    options.value = allOptions.filter(option => option.label.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
  })
}

onBeforeMount(async () => {
  const citiesService = new CitiesApiProxy()
  const { cities } = await citiesService.getCities()

  const citiesOptions = cities.map(city => ({
    label: `${city.name} - ${city.state.shortname}`,
    value: city.placeId
  }))

  allOptions.push(...citiesOptions)
})

</script>

<template>
  <q-select
    v-model="model"
    option-label="label"
    option-value="value"
    use-input
    input-debounce="0"
    label="Destino"
    :options="options"
    @filter="filterOptions"
    outlined
    dense
    options-dense
    input-class="input-field"
    dropdown-icon="keyboard_arrow_down"
    color="primary-100"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style lang="scss">
  .q-field__control{
    border-radius: 8px!important;
  }
</style>
