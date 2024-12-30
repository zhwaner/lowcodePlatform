<script setup lang="ts">
import AppLeftPanel from '@/components/LeftPanel.vue'
import { useDebugStore } from '@/stores/debug'
import { useEditorStore } from '@/stores/editor'
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { storeToRefs } from 'pinia'

const debugStore = useDebugStore()
console.log(debugStore)
const editorStore = useEditorStore()

const { debug } = storeToRefs(debugStore)
const { blocks } = storeToRefs(editorStore)
console.log(editorStore, blocks, debug)
</script>

<template>
  <div class="layout-wrapper" :class="{ debug: debug }">
    <AppLeftPanel></AppLeftPanel>
    <div>
      <SmoothDndContainer
        class="block-group"
        orientation="vertical"
        group-name="blocks"
        tag="div"
        @drop="
          (payload) => {
            console.log('drop', payload)
            editorStore.addBlock(payload)
          }
        "
        :get-child-payload="(index: number) => index"
      >
        <SmoothDndDraggable v-for="block in editorStore.blocks" :key="block">
          <div class="block-item">{{ block }}</div>
        </SmoothDndDraggable>
      </SmoothDndContainer>
    </div>
    <div>右</div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: calc(100% - 48px);
}
</style>
