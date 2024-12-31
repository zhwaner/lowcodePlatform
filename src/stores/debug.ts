import { defineStore } from 'pinia'
import { ref } from 'vue'

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
