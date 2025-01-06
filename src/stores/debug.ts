import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'
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

export type UseTimeParams = {
  silent?: boolean
}

export type UseTimeReturn = {
  time: Ref<string>
}

export const useTime = (params: UseTimeParams): UseTimeReturn => {
  let timer: number | null = null
  const { silent = true } = params
  const time = ref(new Date().toLocaleString())
  onMounted(() => {
    if (!silent) {
      timer = window.setInterval(() => {
        time.value = new Date().toLocaleString()
      }, 1000)
    }
  })
  onBeforeUnmount(() => {
    if (!silent && timer) {
      clearInterval(timer)
    }
  })

  return { time }
}
