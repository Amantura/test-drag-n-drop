<template>
  <Draggable>
    <div class="flex items-center px-4 py-3 space-x-4 bg-white border">
      <span class="flex-shrink-0">
        {{ props.item.title }}
      </span>

      <div class="flex items-center flex-shrink-0 space-x-2">
        <div class="flex-shrink-0 w-[10px] h-[10px] rounded-full bg-sky-500"></div>
      </div>

      <div class="flex items-center flex-1 space-x-3">
        <span class="text-sm text-pink-500">
          Обязательный
        </span>
        <span class="text-sm text-gray-400">
          Для всех
        </span>
      </div>

      <div class="flex items-center flex-shrink-0">
        <button class="flex-shrink-0 w-8 h-8 rounded-full hover:bg-gray-100 flex-center">
          <IPen />
        </button>
        <button class="flex-shrink-0 w-8 h-8 rounded-full hover:bg-gray-100 flex-center">
          <ITrash />
        </button>
        <button class="flex-shrink-0 w-8 h-8 rounded-full dnd-btn-child hover:bg-gray-100 flex-center">
          <IArrowsY />
        </button>
      </div>
    </div>
  </Draggable>
</template>

<script setup>
import ITrash from '@/icons/ITrash.vue'
import IArrowsY from '@/icons/IArrowsY.vue'
import IPen from '@/icons/IPen.vue'
import { Draggable } from 'vue3-smooth-dnd'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>