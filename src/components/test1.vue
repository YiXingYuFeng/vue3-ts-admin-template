<template>
  <div>
    {{name}}
    <svg-icon :name="'bianji'"></svg-icon>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'

export default class extends Vue {
  get name() {
    return 'test'
  }
}
</script>

<style scoped>
</style>
