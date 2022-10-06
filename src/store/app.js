import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',

  state: () => ({
    hi: 'hello'
  }),

  actions: {

  },

  getters: {

  }
})