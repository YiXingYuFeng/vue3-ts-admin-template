<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <test/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/svg.vue' // @ is an alias to /src
import test from '@/components/test1.vue'

@Options({
  components: {
    HelloWorld,
    test
  }
})
export default class Home extends Vue {}
</script>
