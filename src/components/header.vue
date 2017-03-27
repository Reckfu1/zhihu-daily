<template>
    <div id="header">
        <mu-appbar title="今日热闻" :zDepth="depth" class="title">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" />
        </mu-appbar>
        <div id="swiper-box">
            <swiper :options="swiperOption" id="swiper">
                <swiper-slide id="swiper-item-1"></swiper-slide>
                <swiper-slide id="swiper-item-2"></swiper-slide>
                <swiper-slide id="swiper-item-3"></swiper-slide>
                <swiper-slide id="swiper-item-4"></swiper-slide>
                <swiper-slide id="swiper-item-5"></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
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
                autoplay:2750,
                autoplayDisableOnInteraction:false,
                effect:'fade',
                loop:false
            },
            depth:0
        }
    },
    components:{
        swiper,
        swiperSlide
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
    font-size: 18px;
}
.title .mu-appbar-title{
    font-size: 18px;
}
.menu-btn{
    position: absolute;
    top: -4.5px;
    left:-2px;
}
#swiper{
    height: 175px;
}
#swiper-item-1{
    background: url('../assets/test1.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}
#swiper-item-2{
    background: url('../assets/test2.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}
#swiper-item-3{
    background: url('../assets/test3.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}
#swiper-item-4{
    background: url('../assets/test4.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}
#swiper-item-5{
    background: url('../assets/test5.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}
.swiper-pagination{
    bottom:-1px !important;
}
#swiper-box{
    
}
</style>