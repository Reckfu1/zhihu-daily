<template>
    <div id="header">
<!--         <div class="shade-box">
            <div class="shade-top"></div>
            <div class="shade-bottom"></div>
        </div> -->
        <mu-appbar title="今日热闻" :zDepth="depth" class="title" titleClass="change">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" />
        </mu-appbar>
        <div id="swiper-box">
            <swiper :options="swiperOption" v-if="swiper_mes.top_stories" id="swiper">
                <swiper-slide id="swiper-item-1"><img :src="swiper_mes.top_stories[0].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[0].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-2"><img :src="swiper_mes.top_stories[1].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[1].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-3"><img :src="swiper_mes.top_stories[2].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[2].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-4"><img :src="swiper_mes.top_stories[3].image" alt="">
                    <span class="swiper-title">{{swiper_mes.top_stories[3].title}}</span>
                </swiper-slide>
                <swiper-slide id="swiper-item-5"><img :src="swiper_mes.top_stories[4].image" alt="">
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
                touchMoveStopPropagation : false,
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
                if(res instanceof Error){
                    console.log('Error',res.message)
                }
            })
    }
}

</script>


<style lang="css">
.title{
    background-color:transparent !important;
    text-align: center !important;
    height: 38px !important;
    color:#fff !important;
    position: fixed !important;
}
.change{
    position: absolute;
    font-size: 18px !important;
    height: 38px;
    line-height: 38px !important;
    right:35.5%;
}
.menu-btn{
    position: absolute;
    left:-2px;
}
#swiper{
    height: 200px;
}
#swiper img{
    width: 100%;
}
.swiper-pagination{
    bottom:-1px !important;
}
.swiper-title{
    display: block;
    width: 75%;
    font-size: 16px;
    position: absolute;
    top:135px;
    left: 10%;
    color:#fff;
    font-weight: bolder;
    text-align: center;
}
/*shade*/
/*.shade-box{
    height: 195px;
    width: 100%;
    position:absolute;
    z-index: 9999;
    top:0;
}
.shade-top,.shade-bottom{
    height: 97.5px;
    width:100%;
}
.shade-top{
    background: linear-gradient(rgba(0,0,0,0.3), rgba(255,255,255,0));
}
.shade-bottom{
    background: linear-gradient(rgba(255,255,255,0), rgba(0,0,0,0.3));
}*/
</style>