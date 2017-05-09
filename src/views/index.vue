<template>
    <div id="index" class="animated fadeIn">
        <v-header></v-header>
        <news></news>
    </div>
</template>


<script>
import header from '../components/header'
import news from '../components/news'

export default {
    components: {
        'v-header': header,
        news
    },
    deactivated(){
        sessionStorage.setItem('scrollTop',document.body.scrollTop)
    }
}
</script>

<style lang="css">
</style>