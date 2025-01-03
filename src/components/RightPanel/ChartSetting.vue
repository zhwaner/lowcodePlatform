<script setup lang="ts">
import type { ChartBlock } from '@/types/block'

const props = defineProps<{
  block: ChartBlock
}>()
</script>

<template>
  <input :value="props.block.type" />
</template>
