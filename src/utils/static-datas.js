export const datas = [
  {
    id: 1,
    title: 'parent 1',
    desc: 'desc 1',
    children: [
      {
        id: 1,
        title: 'child 1'
      },
      {
        id: 2,
        title: 'child 2'
      },
    ]
  },
  {
    id: 2,
    title: 'parent 2',
    desc: 'desc 2',
    children: [
      {
        id: 3,
        title: 'child 3'
      },
      {
        id: 4,
        title: 'child 4'
      },
    ]
  },
  {
    id: 3,
    title: 'parent 3',
    desc: 'desc 3',
    children: [
      {
        id: 5,
        title: 'child 5'
      },
      {
        id: 6,
        title: 'child 6'
      },
    ]
  },
  {
    id: 4,
    title: '',
    desc: '',
    empty: true,
    children: [
      {
        id: 7,
        title: 'child 7'
      }
    ]
  }
]

export function applyParentDrop(arr, removedIndex, addedIndex, payload) {
  const result = [...arr]
  const lastIndex = result.length - 1
  let draggedItem = payload

  if (removedIndex !== null) {
    draggedItem = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    if (addedIndex === lastIndex && !draggedItem?.type) {
      result.splice(addedIndex - 1, 0, draggedItem)
    } else {
      result.splice(addedIndex, 0, draggedItem)
    }
  }

  return result
}

export function applyChildDrop(arr, removedIndex, addedIndex, payload) {
  const draggedItem = payload
  const result = [...arr]

  if (removedIndex !== null) {
    result.splice(removedIndex, 1)
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, draggedItem)
  }

  return result
}