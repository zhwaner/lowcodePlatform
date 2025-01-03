import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { blocks as mockBlocks } from '@/mock/blocks'
import type { Block } from '@/types/block'

export const useEditorStore = defineStore('editor', () => {
  const blocks = ref<Block[]>(mockBlocks)

  const activeBlockId = ref<string | null>(null)

  const selectedBlock = computed(() => {
    return blocks.value.find((block) => block.id === activeBlockId.value)
  })

  const addBlock = (block: Block) => {
    blocks.value.push(block)
  }

  const updateBlocks = (newBlocks: Block[]) => {
    // 一般尽量不要直接覆盖，这样会影响性能
    blocks.value = newBlocks
  }

  const updateBlock = (block: Block) => {
    const index = blocks.value.findIndex((b) => b.id === block.id)
    if (index !== -1) {
      blocks.value.splice(index, 1, block)
    }
  }

  const selectBlock = (block: Block) => {
    activeBlockId.value = block.id
  }

  console.log(blocks)
  return {
    blocks,
    activeBlockId,
    selectedBlock,
    addBlock,
    updateBlocks,
    updateBlock,
    selectBlock,
  }
})
