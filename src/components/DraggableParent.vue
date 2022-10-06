<template>
  <Draggable
    class="flex-shrink-0">
    <!-- parent -->
    <div
      v-if="!props.item.empty"
      ref="parentRef"
      class="flex items-center px-4 py-3 space-x-4 bg-white border">
      <button
        :class="{'rotate-180': !visible}"
        class="w-8 h-8 transition-all duration-200 ease-in-out transform border rounded-full flex-center "
        @click="toggle">
        <IArrow />
      </button>

      <span
        class="flex-shrink-0 font-semibold cursor-pointer hover:underline"
        @click="toggle">
        {{ props.item.title }}
      </span>

      <div class="flex items-center flex-shrink-0 space-x-2">
        <div class="flex-shrink-0 w-[10px] h-[10px] bg-pink-500 rounded-full"></div>
        <div class="flex-shrink-0 w-[10px] h-[10px] bg-yellow-500 rounded-full"></div>
        <div class="flex-shrink-0 w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
      </div>

      <span class="flex-1 text-sm text-gray-400">
        {{ props.item.desc }}
      </span>

      <div class="flex items-center flex-shrink-0">
        <button class="flex-shrink-0 w-8 h-8 rounded-full hover:bg-gray-100 flex-center">
          <IPen />
        </button>
        <button class="flex-shrink-0 w-8 h-8 rounded-full hover:bg-gray-100 flex-center">
          <ITrash />
        </button>
        <button class="flex-shrink-0 w-8 h-8 rounded-full cursor-move dnd-btn hover:bg-gray-100 flex-center">
          <IArrowsY />
        </button>
      </div>
    </div>

    <!-- childs -->
    <transition
      enter-active-class="transition-all duration-200 ease-out transform"
      leave-active-class="transition-all duration-200 ease-out transform"
      enter-from-class="scale-95 opacity-0"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="visible"
        :class="{'mt-10 !ml-0 min-h-[75px]': props.item?.empty === true}"
        class="ml-16 !overflow-hidden border px-3 py-2 border-dashed">
        <slot></slot>
      </div>
    </transition>
  </Draggable>
</template>

<script setup>
import IArrow from '@/icons/IArrow.vue'
import ITrash from '@/icons/ITrash.vue'
import IArrowsY from '@/icons/IArrowsY.vue'
import IPen from '@/icons/IPen.vue'
import { ref, watch } from 'vue'
import { Draggable } from 'vue3-smooth-dnd'
import { useElementHover } from '@vueuse/core'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },

  childDragStatus: {
    type: Boolean,
    required: true
  }
})

const parentRef = ref(null)
const isHovered = useElementHover(parentRef)
const visible = ref(props.item?.empty || false)

watch(isHovered, v => {
  if (props.childDragStatus && v) {
    visible.value = true
  }
})

function toggle() {
  visible.value = !visible.value
}
</script>