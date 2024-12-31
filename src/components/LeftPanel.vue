<script setup lang="ts">
import { Lightning, Share } from '@icon-park/vue-next'
import { ref } from 'vue'

import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'

type Mode = 'outline' | 'blocks' | null

const mode = ref<Mode>(null)

const toggleMode = (newMode: Mode) => {
  if (newMode === mode.value) {
    mode.value = null
  } else {
    mode.value = newMode
  }
}
</script>

<template>
  <div class="left-panel-wrapper">
    <div class="left-panel-left">
      <div class="btn" :class="{ active: mode === 'outline' }" @click="toggleMode('outline')">
        <Lightning />
      </div>
      <div class="btn" :class="{ active: mode === 'blocks' }" @click="toggleMode('blocks')">
        <Share />
      </div>
    </div>
    <Transition name="fade">
      <div class="left-panel-content" v-show="mode">
        <SmoothDndContainer
          class="block-group"
          behaviour="copy"
          group-name="blocks"
          tag="div"
          @drag-start="
            (e, v) => {
              console.log(e, v)
            }
          "
          @drag-leave="
            (e, v) => {
              console.log('leave', e, v)
            }
          "
          @drop="
            (e) => {
              console.log('drop', e)
            }
          "
          :get-child-payload="(index: number) => index + 1"
        >
          <SmoothDndDraggable v-for="item in 10" :key="item">
            <div class="block-item">{{ item }}</div>
          </SmoothDndDraggable>
        </SmoothDndContainer>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.left-panel-wrapper {
  display: flex;
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e8e8e8;
}

.left-panel-left {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 100%;
  background-color: #e8e8e8;
}

.left-panel-left .btn {
  width: 40px;
  height: 40px;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
}

.left-panel-content {
  flex: 1;
  width: 250px;
  height: 100%;
  background-color: #f5f5f5;
}

.block-group {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.block-item {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  text-align: center;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: width 0.1s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.fade-enter-from,
.fade-leave-to {
  width: 0;
}
</style>
