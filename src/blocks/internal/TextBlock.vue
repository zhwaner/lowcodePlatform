<template>
  <div>{{ props.block.props.content }}</div>
</template>

<script setup lang="ts">
import type { TextBlock } from '@/types/block'

const props = defineProps<{
  block: TextBlock
}>()
</script>
