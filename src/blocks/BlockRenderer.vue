<template>
  <component :is="blockMaterial" :block="block"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Block } from '@/types/block'

import ChartBlock from './internal/ChartBlock.vue'
import FallbackBlock from './internal/FallbackBlock.vue'
import ImageBlock from './internal/ImageBlock.vue'
import TextBlock from './internal/TextBlock.vue'
// type BlockType = 'chart' | 'image' | 'text'

// const type:BlockType = 'image'

const props = defineProps<{
  block: Block
}>()

// let blockMaterial: any

// switch (props.block.type) {
//   case 'chart':
//     blockMaterial = ChartBlock
//     break
//   case 'image':
//     blockMaterial = ImageBlock
//     break
//   case 'text':
//     blockMaterial = TextBlock
//     break
//   default:
//     blockMaterial = FallbackBlock
// }

const blockMaterial = computed(() => {
  switch (props.block.type) {
    case 'chart':
      return ChartBlock
    case 'image':
      return ImageBlock
    case 'text':
      return TextBlock
    default:
      return FallbackBlock
  }
})
</script>
