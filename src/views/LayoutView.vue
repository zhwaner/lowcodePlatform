<script setup lang="ts">
import { useEnvStore } from '@/stores/debug'
const editorStore = useEnvStore()
</script>

<template>
  <div class="about" :class="{ debug: editorStore.debug }" @click="editorStore.toggle">Layout</div>
</template>

<style scoped>
.debug {
  border: 2px dashed #afafaf;
}
</style>
