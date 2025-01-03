<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { DropResult } from 'smooth-dnd'

import BlockRenderer from '@/blocks/BlockRenderer.vue'
import AppLeftPanel from '@/components/LeftPanel.vue'
import RightPanel from '@/components/RightPanel/RightPanel.vue'
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { useDebugStore } from '@/stores/debug'
import { useEditorStore } from '@/stores/editor'
import { arrayMove } from '@/utils/array'

const debugStore = useDebugStore()
console.log(debugStore)
const editorStore = useEditorStore()

const { debug } = storeToRefs(debugStore)
const { blocks, activeBlockId } = storeToRefs(editorStore)
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
  <div class="layout-wrapper">
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
            editorStore.updateBlocks(newBlocks)
          }
        "
        :get-child-payload="(index: number) => index"
      >
        <SmoothDndDraggable v-for="block in blocks" :key="block.id">
          <div
            :class="{ 'block-wrapper': true, debug: debug || block.id === activeBlockId }"
            :data-block-type="block.type"
            :data-block-id="block.id"
            @click="() => editorStore.selectBlock(block)"
          >
            <BlockRenderer :block="block"></BlockRenderer>
          </div>
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
  margin: 20px;
  overflow-y: auto;
}

.block-wrapper {
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  border: 2px solid transparent;
}

.block-wrapper.debug {
  border: 2px dotted turquoise;
}
</style>
