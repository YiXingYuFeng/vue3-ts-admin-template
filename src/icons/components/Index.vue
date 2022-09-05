<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang='ts'>
import { defineProps, computed } from 'vue'

  interface PropsType{
    iconClass: string
    className?: string
  }
const props = defineProps<PropsType>()

// svg的样式名称
const svgClass = computed(() => 'svg-icon' + props.className)
// svg 名称
const iconName = computed(() => '#icons-' + props.iconClass)
</script>

<style scoped>
</style>
