<template>
  <label class="flex max-w-[600px] items-center px-3 space-x-2 border-b-2 focus-within:border-blue-500">
    <ISearch class="text-gray-500" />
    <input
      v-model="model"
      type="text"
      placeholder="Поиск"
      class="flex-1 py-3 border-none placeholder:italic focus:border-none focus:outline-none focus:ring-0" />
    <button
      v-if="model.trim()"
      @click="clear()">
      <ITimes />
    </button>
  </label>
</template>

<script setup>
import ISearch from '@/icons/ISearch.vue'
import ITimes from '@/icons/ITimes.vue'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emit('update:modelValue', v)
  }
})

function clear() {
  model.value = ''
}
</script>