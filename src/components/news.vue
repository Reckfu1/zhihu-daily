<template>
    <div id="news">
        <div id="news-items" v-for="(item,index) in news">
            <div class="content-text">{{item.title}}</div>
            <div class="content-img"><img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+imgsrc[index]" alt=""></div>
        </div>
    </div>
</template>




<script>
// import content from './content.vue'

export default {

    data(){
        return {
            news:[],
            imgsrc:[]
        }
    },

    created(){
        let _this=this;
        this.$http.get('/api/4/news/latest')
            .then((res) => {
                _this.news=res.data.stories
                for(let i=0;i<_this.news.length;i++){
                    _this.imgsrc[i]=_this.news[i].images;
                }
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
#news-items{
    height: 90px;
    width: 100%;
    /*background-color:gray;*/
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.content-text{
    height: 65px;
    width: 65%;
    /*background-color: #fff;*/
    font-weight: bolder;
    font-size: 14px;
}
.content-img{
    height: 65px;
    width:25%;
    /*background-color: #fbb;*/
}
.content-img img{
    height: 100%;
    width: 100%;
}
</style>