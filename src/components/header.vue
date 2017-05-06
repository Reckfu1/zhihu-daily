<template>
    <div id="header" v-show="h_show">
        <mu-appbar title="今日热闻" :zDepth="depth" class="title" titleClass="change" :style="header_obj">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" />
        </mu-appbar>
        <div id="swiper-box">
            <swiper :options="swiperOption" v-if="swiper_mes.top_stories" id="swiper" ref="mySwiper">
                <swiper-slide id="swiper-item" v-for="item in swiper_mes.top_stories" :key="item.id">
                    <img :src="item.image" alt="">
                    <span class="swiper-title">{{item.title}}</span>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            </swiper>
            <div class="shade-top"></div>
            <div class="shade-bottom"></div>
        </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

    data(){
        return{
            swiperOption:{
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                // notNextTick: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay:2850,
                autoplayDisableOnInteraction:false,
                effect:'fade',
                touchMoveStopPropagation : false,
                loop:false,
                // 要使用箭头函数，在swiper的事件函数内，this不指向当前vue实例，当然了也可以在data内先获取this来保存vue实例
                onTap:(e) => {
                    this.getTopStories(e)
                }
            },
            depth:0,
            scroll:0,
            swiper_mes:{},
            header_obj:{
                backgroundColor:'rgba(0,0,0,0)'
            },
            h_show:false
        }
    },
    computed:{
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        // swiper(){
        //     return this.$refs.mySwiper.swiper
        // }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        this.$http.get('/api/4/news/latest')
            .then((res) => {
                this.swiper_mes=res.data
                this.h_show=true
            })
            .catch((res) => {
                if(res instanceof Error){
                    console.log('Error',res.message)
                }
            })
    },
    activated(){
        window.addEventListener('scroll',this.watchScroll)
        // console.log('this is current swiper instance object',this.swiper)
    },
    deactivated(){
        window.removeEventListener('scroll',this.watchScroll)
    },
    methods:{
        watchScroll(){
            let value,header_str
            this.scroll=document.body.scrollTop
            value=this.scroll/800
            if(value>=1){
                return
            }
            this.header_obj.backgroundColor='rgba(0,0,0,'+value+')'
        },
        getTopStories(e){
            console.log(e.previousIndex)
        }
    }
}

</script>


<style lang="css">
#header{
    /*position: relative;*/
}
.title{
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
    margin-top: -40px;
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

.shade-top,.shade-bottom{
    height: 30px;
    width:100%;
    position: absolute;
    z-index: 2;
}
.shade-top{
    top:0;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0));
}
.shade-bottom{
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));
}
#swiper-box{
    position: relative;
}
</style>