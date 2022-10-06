<template>
  <header class="flex items-center py-4 space-x-3">
    <h1 class="flex-1 text-3xl font-semibold">{{ props.title }}</h1>

    <button class="w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-200 flex-center">
      <IBookmark class="text-gray-500" />
    </button>

    <button class="flex items-center h-8 px-3 space-x-2 text-sm border border-gray-300 hover:bg-gray-200 rounded-2xl">
      <IPlus />
      <span>Новый тип</span>
    </button>
    <button class="flex items-center h-8 px-3 space-x-2 text-sm border border-gray-300 hover:bg-gray-200 rounded-2xl">
      <IPlus />
      <span>Новый документ</span>
    </button>
  </header>
</template>

<script setup>
import IBookmark from '@/icons/IBookmark.vue'
import IPlus from '@/icons/IPlus.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  }
})
</script>