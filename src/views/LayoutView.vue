<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { DropResult } from 'smooth-dnd'

import BlockRenderer from '@/blocks/BlockRenderer.vue'
import AppLeftPanel from '@/components/LeftPanel.vue'
import RightPanel from '@/components/RightPanel.vue'
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { useDebugStore } from '@/stores/debug'
import { useEditorStore } from '@/stores/editor'
import { arrayMove } from '@/utils/array'

const debugStore = useDebugStore()
console.log(debugStore)
const editorStore = useEditorStore()

const { debug } = storeToRefs(debugStore)
const { blocks } = storeToRefs(editorStore)
console.log(editorStore, blocks, debug)

const applyDrag = <T extends any[]>(arr: T, dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  const result = [...arr]
  // 啥都没做
  if (addedIndex === null) return result
  // 添加
  if (addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, payload)
  }
  // 移动
  if (addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }
  return result
}
</script>

<template>
  <div class="layout-wrapper" :class="{ debug: debug }">
    <AppLeftPanel></AppLeftPanel>
    <div class="layout-painter">
      <SmoothDndContainer
        class="block-group"
        orientation="vertical"
        group-name="blocks"
        tag="div"
        @drop="
          (payload) => {
            console.log('drop', payload)
            const newBlocks = applyDrag(blocks, payload)
            editorStore.updateBlock(newBlocks)
          }
        "
        :get-child-payload="(index: number) => index"
      >
        <SmoothDndDraggable v-for="block in blocks" :key="block.id">
          <BlockRenderer :block="block"></BlockRenderer>
        </SmoothDndDraggable>
        <!-- <SmoothDndDraggable v-for="block in blocks" :key="block">
          <div class="block-item">{{ block }}</div>
        </SmoothDndDraggable> -->
      </SmoothDndContainer>
    </div>
    <div>
      <RightPanel></RightPanel>
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: calc(100% - 48px);
}

.layout-painter {
  width: 100%;
  background-color: #f5f5f5;
  margin: 20px;
  overflow-y: auto;
}
</style>
