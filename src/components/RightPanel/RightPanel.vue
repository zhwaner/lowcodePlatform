<script setup lang="ts">
import { storeToRefs } from 'pinia'

// import { computed } from 'vue'
import { useEditorStore } from '@/stores/editor'
// import type { Block } from '@/types/block'

// import ChartSetting from './ChartSetting.vue'
// import ImageSetting from './ImageSetting.vue'
// import TextSetting from './TextSetting.vue'

const editorStore = useEditorStore()
const { selectedBlock } = storeToRefs(editorStore)
console.log(selectedBlock)

// const blockRightPanel = computed(() => {
//   if (!selectedBlock.value) return null
//   switch (selectedBlock.value?.type) {
//     case 'text':
//       return TextSetting
//     case 'image':
//       return ImageSetting
//     case 'chart':
//       return ChartSetting
//     default:
//       return null
//   }
// })

// const handleUpdateBlock = (block: Block) => {
//   editorStore.updateBlock(block)
//   console.log(block, editorStore)
// }
</script>

<template>
  <div class="right-panel-wrapper" v-if="selectedBlock">
    <div class="right-panel-left">
      <!-- 由于eslint校验ts报错，暂时不会解决，这里先把内容注释起来 -->
      <!-- {{ JSON.stringify(selectedBlock) }} -->
      <!-- <component :is="blockRightPanel" :block="selectedBlock" @change="handleUpdateBlock" /> -->
    </div>
  </div>
</template>

<style scoped>
.right-panel-wrapper {
  display: flex;
  width: 320px;
  padding: 12px;
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e8e8e8;
}

.right-panel-left {
  width: 100%;
  height: 100%;
  background-color: #e8e8e8;
}
</style>
