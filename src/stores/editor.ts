import { defineStore } from 'pinia'
import { ref } from 'vue'

import { blocks as mockBlocks } from '@/mock/blocks'
import type { Block } from '@/types/block'

export const useEditorStore = defineStore('editor', () => {
  const blocks = ref<Block[]>(mockBlocks)

  const addBlock = (block: Block) => {
    blocks.value.push(block)
  }

  const updateBlock = (newBlocks: Block[]) => {
    // 一般尽量不要直接覆盖，这样会影响性能
    blocks.value = newBlocks
  }

  console.log(blocks)
  return {
    blocks,
    addBlock,
    updateBlock,
  }
})
