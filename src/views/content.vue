<template>
<div id="content">
    <div class="detail" v-html="content_data.body"></div>
    <mu-circular-progress :size="45" color="black" :strokeWidth="4" v-show="c_waiting" class="n-wait" />
</div>
</template>


<script>

export default{

    data(){
        return {
            content_data:{},
            c_waiting:true
        }
    },
    created(){
        this.c_waiting=true
        let id=this.$route.params.id
        this.$http.get('/api/4/news/'+id)
            .then((res) => {
                this.content_data=res.data
                this.c_waiting=false
            })
            .catch((res) => {
                if(res instanceof Error){
                    console.log('Error',res.message)
                }
            })
        
    }
}

</script>


<style lang="css">
@import '../assets/css/news_qa.auto.css'
</style>