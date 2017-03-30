<template>
    <div id="header">
        <mu-appbar title="今日热闻" :zDepth="depth" class="title">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" />
        </mu-appbar>
        <div id="swiper-box">
            <swiper :options="swiperOption" v-if="swiper_mes.top_stories" id="swiper">
                <swiper-slide id="swiper-item-1"><img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+swiper_mes.top_stories[0].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[0].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-2"><img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+swiper_mes.top_stories[1].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[1].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-3"><img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+swiper_mes.top_stories[2].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[2].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-4"><img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+swiper_mes.top_stories[3].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[3].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-5"><img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+swiper_mes.top_stories[4].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[4].title}}</span>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

    data(){
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay:2850,
                autoplayDisableOnInteraction:false,
                effect:'fade',
                loop:false
            },
            depth:0,
            swiper_mes:{}
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        let _this=this;
        this.$http.get('/api/4/news/latest')
            .then((res) => {
                _this.swiper_mes=res.data
            })
            .catch((res) => {
                console.log('fail to load resource')
            })
    }
}

</script>


<style lang="css" scoped>
.title{
    background-color:transparent;
    text-align: center;
    height: 38px;
    color:#fff;
    position: absolute;
}
.menu-btn{
    position: absolute;
    top: -4.5px;
    left:-2px;
}
#swiper{
    height: 195px;
}
#swiper img{
    width: 100%;
}
.swiper-pagination{
    bottom:-1px !important;
}
.swiper-pagination-bullet-active{
    background:red;
}
.swiper-title{
    display: block;
    width: 80%;
    font-size: 14px;
    position: absolute;
    top:135px;
    left: 10%;
    color:#fff;
    font-weight: bolder;
    text-align: center;
}
</style>