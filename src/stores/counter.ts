import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }

  return { count, double, decrement, increment }
})
