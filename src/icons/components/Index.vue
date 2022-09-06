<template>
  <svg  aria-hidden="true">
    <use :xlink:href="svgName" />
  </svg>
</template>

<script  lang='ts'>
// import { defineProps, computed } from 'vue'
//
//   interface PropsType{
//     iconClass: string
//     className?: string
//   }
// const props = defineProps<PropsType>()
//
// // svg的样式名称
// const svgClass = computed(() => 'svg-icon' + props.className)
// // svg 名称
// const iconName = computed(() => '#icons-' + props.iconClass)
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const svgName = computed(() => `#icon-${props.name}`)
    return {
      svgName
    }
  }
})
</script>

<style scoped>
</style>
