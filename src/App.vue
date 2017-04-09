<template>
  <div id="app">
    <v-header></v-header>
    <news></news>  
  </div>
</template>

<script>

import header from './components/header'
import news from './components/news/news'

export default {
  components:{
    'v-header':header,
    news
  }
}
</script>

<style>
</style>
