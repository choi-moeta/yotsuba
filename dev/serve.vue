<template>
  <div id='app'>
    <YoSample />
  </div>
</template>

<script>
import Vue from 'vue'
import { YoSample } from '@/entry'

export default {
  name: 'serve-dev',
  components: {
    YoSample,
  },
}
</script>
