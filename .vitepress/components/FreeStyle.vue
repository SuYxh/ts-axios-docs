<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const add = () => {
  num.value++
}
</script>

<template>
  <div class="freestyle">我就是FreeStyle组件 Yoo</div>
  <button class="btn" @click="add">{{ num }}</button>
</template>

<style>
.freestyle {
  color: blue;
  font-size: 24px;
  font-weight: 600;
}
.btn {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}
</style>