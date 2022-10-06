<template>
  <section
    v-auto-animate
    class="flex flex-col px-4 py-3 space-y-6 overflow-hidden wrapper">
    <AppHeader title="Документы" />
    <AppSearchBar v-model="search" />

    <Container
      :tag="containerConfig.tag"
      :group-name="containerConfig.groupName"
      :drag-handle-selector="containerConfig.selector"
      :orientation="containerConfig.orientation"
      :drag-class="containerConfig.dragClass"
      :drop-class="containerConfig.dropClass"
      :drop-placeholder="containerConfig.ghostOptions"
      class="flex flex-col flex-grow"
      @drop="e => onParentDrop(e)"
    >
      <DraggableParent
        v-for="parent in filteredParents"
        :key="parent.id"
        :child-drag-status="childDragStatus"
        :item="parent">
        <Container
          :tag="containerConfig.tag"
          :group-name="containerConfig.groupName + '-child'"
          :drag-handle-selector="containerConfig.selector + '-child'"
          :orientation="containerConfig.orientation"
          :drag-class="containerConfig.dragClass"
          :drop-class="containerConfig.dropClass"
          :drop-placeholder="containerConfig.ghostOptions"
          :get-child-payload="getChildPayload(parent.id)"
          class="flex flex-col flex-grow"
          @drag-start="() => childDragStatus = true"
          @drag-end="() => childDragStatus = false"
          @drop="e => onChildDrop(parent.id, e)"
        >
          <DraggableChild
            v-for="child in parent.children"
            :key="child.id"
            :item="child" />
        </Container>
      </DraggableParent>
    </Container>

  </section>
</template>

<script setup>
import AppHeader from '@@/app/AppHeader.vue'
import AppSearchBar from '@@/app/AppSearchBar.vue'
import DraggableParent from '@@/DraggableParent.vue'
import DraggableChild from '@@/DraggableChild.vue'
import { computed, ref } from 'vue'
import { Container } from 'vue3-smooth-dnd'
import { datas, applyParentDrop, applyChildDrop } from '@/utils/static-datas'

const containerConfig = {
  tag: 'div',
  orientation: 'vertical',
  groupName: 'parents',
  selector: '.dnd-btn',
  dragClass: 'z-50 shadow-lg shadow-blue-600/50',
  dropClass: 'z-50 transition duration-100 ease-in transform scale-90 -rotate-2',
  ghostOptions: {
    className:
    `border-dotted border-2 bg-blue-500/20
     border-blue-500 rounded mx-4 my-2`,
    animationDuration: '200',
    showOnTop: true
  }
}
const search = ref('')
const parents = ref(datas)
const childDragStatus = ref(false)

const filteredParents = computed(() => {
  const text = search.value.trim().toLowerCase()
  return parents.value.filter(i => i.title.toLowerCase().indexOf(text) > -1)
})

function onParentDrop({ addedIndex, removedIndex, payload }) {
  if (addedIndex === null && removedIndex === null) return
  parents.value = applyParentDrop(parents.value, removedIndex, addedIndex, payload)
}

function onChildDrop(parentId, { removedIndex, addedIndex, payload }) {
  const parent = Object.assign({}, parents.value.find(i => i.id === parentId))
  if (removedIndex === null && addedIndex === null) return
  parent.children = applyChildDrop(parent.children, removedIndex, addedIndex, payload)
  const parentIdx = parents.value.findIndex(i => i.id === parentId)

  if (parentIdx > -1) {
    parents.value.splice(parentIdx, 1, parent)
  }
}

function getChildPayload(parentId) {
  return childIdx => {
    return parents.value.find(parent => parent.id === parentId).children[childIdx]
  }
}
</script>