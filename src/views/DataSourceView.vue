<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
// import { ref } from 'vue'
const store = useCounterStore()
// const countTwo = ref(store.count)
</script>

<template>
  <div class="">
    DataSource
    <h1>{{ store.count }}</h1>
    --
    <h1>{{ store.double }}</h1>
    <button @click="store.increment">Increment</button>
    <button @click="store.decrement">Decrement</button>
  </div>
</template>
