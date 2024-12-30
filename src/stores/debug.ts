import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDebugStore = defineStore('debug', () => {
  const debug = ref(false)
  const toggleDebug = () => {
    debug.value = !debug.value
  }
  return {
    debug,
    toggleDebug,
  }
})
