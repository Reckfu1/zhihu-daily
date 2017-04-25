<template>
    <div id="header">
        <mu-appbar title="今日热闻" :zDepth="depth" class="title" titleClass="change" :style="header_obj" v-if="show_1">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" />
        </mu-appbar>
        <div id="swiper-box">
            <swiper :options="swiperOption" v-if="swiper_mes.top_stories" id="swiper" ref="mySwiper">
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
                notNextTick: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay:2850,
                autoplayDisableOnInteraction:false,
                effect:'fade',
                touchMoveStopPropagation : false,
                loop:false,
                // 要使用箭头函数，在swiper的事件函数内，this不指向当前vue实例，当然了也可以在data内先获取this来保存vue实例
                onTap:() => {
                    this.getTopStories()
                }
            },
            depth:0,
            scroll:0,
            swiper_mes:{},
            header_obj:{
                backgroundColor:'rgba(0,0,0,0)'
            },
            show_1:false
        }
    },
    computed:{
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        swiper(){
            return this.$refs.mySwiper.swiper
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        this.$http.get('/api/4/news/latest')
            .then((res) => {
                this.swiper_mes=res.data
                this.show_1=true
            })
            .catch((res) => {
                if(res instanceof Error){
                    console.log('Error',res.message)
                }
            })
    },
    mounted(){
        window.addEventListener('scroll',this.watchScroll)
        // console.log('this is current swiper instance object',this.swiper)
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
        getTopStories(){
            console.log('111')
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
/*loading*/
.h-wait{
    position: absolute !important;
    z-index: 9999;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    margin:auto;
}
</style>