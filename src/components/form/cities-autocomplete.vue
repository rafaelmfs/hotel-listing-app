<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { CitiesApiProxy } from 'src/services/proxy/cities-api-proxy';
import type { OptionProtocol } from 'src/protocols/select-option-protocol';


const allOptions: OptionProtocol[] = []

const model = defineModel()
const options = ref<OptionProtocol[]>([])

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
    outlined
    dense
    options-dense
    input-class="input-field"
    dropdown-icon="keyboard_arrow_down"
    color="primary-100"
    :menu-offset="[0, 4]"
    @filter="filterOptions"
    :options="options"
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
