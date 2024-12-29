<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { computed } from 'vue'
import AppNavigator from './components/AppNavigator.vue'

// const routes = useRoute()
// console.log(routes)
// const activeTabs = computed(() => { return routes.name })
// console.log(activeTabs)

// const routesList = ['dataSource', 'layout', 'actions']
</script>

<template>
  <!-- <header>
    <RouterLink v-for="item in routesList" :key="item" :to="`/${item}`"
    :class="{active: activeTabs === item}">{{ item }}</RouterLink>
  </header> -->1
  <AppNavigator msg="hello" />
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

/* .active {
  background-color: red;
} */
</style>
