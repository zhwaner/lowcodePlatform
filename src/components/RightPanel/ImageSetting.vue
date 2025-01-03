<script setup lang="ts">
import type { ImageBlock } from '@/types/block'

const props = defineProps<{
  block: ImageBlock
}>()

const emit = defineEmits<{
  change: [block: ImageBlock]
}>()

const handleChange = (src: string) => {
  const block = { ...props.block, props: { ...props.block.props, src } }
  emit('change', block)
}
</script>

<template>
  <input
    class="content"
    :value="props.block.props.src"
    @change="(ev) => handleChange((ev.target as HTMLInputElement).value)"
  />
  <!-- {{ props.block.props.src }} -->
</template>

<style scoped>
.content {
  width: 100%;
}
</style>
