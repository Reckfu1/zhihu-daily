<template>
    <div id="header" v-show="h_show">
<!--         <mu-appbar title="今日热闻" :zDepth="depth" class="title" titleClass="change" :style="header_obj">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" @click="toggle" />
        </mu-appbar> -->
        <div class="title-box" :style="header_obj">
            <mu-icon value="menu" :size="28" color="white" class="menu-btn" @click="toggle"/>
            <span class="title">今日热闻</span>
        </div>
        <div id="swiper-box">
            <swiper :options="swiperOption" v-if="swiper_mes" id="swiper" ref="mySwiper">
                <swiper-slide id="swiper-item" v-for="item in swiper_mes" :key="item.id">
                    <img :src="item.image" alt="">
                    <span class="swiper-title">{{item.title}}</span>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            </swiper>
            <div class="shade-top"></div>
            <div class="shade-bottom"></div>
        </div>
        <mu-drawer :open="open" :docked="docked" width="160px" @close="toggle()">
            <mu-list>
                <mu-list-item title="知乎日报" titleClass="head-title"></mu-list-item>
                <mu-list-item :title="item.name" titleClass="themes-title" v-for="item in themesData" :key="item.id" @click="goToThemesList(item.id)">
                    <mu-icon slot="right" value="chevron_right"/>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
        <div style="position:fixed;z-index:3;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:0.3" v-show="shadeShow" @click="toggle"></div>
    </div>
</template>



<script>
import router from '../router'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {fetchLastestNews,fetchThemes} from '../api'
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
                loop:false,
                // 要使用箭头函数，在swiper的事件函数内，this不指向当前vue实例，当然了也可以在data内先获取this来保存vue实例
                onTap:(e) => {
                    this.getTopStories(e)
                }
            },
            depth:0,
            scroll:0,
            swiper_mes:[],
            header_obj:{
                backgroundColor:'rgba(0,0,0,0)'
            },
            h_show:false,
            open:false,
            docked:true,
            shadeShow:false,
            themesData:[]
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        this.h_show=false
        
        fetchLastestNews().then((res) => {
            this.swiper_mes=res.data.top_stories
            this.h_show=true
        })

        fetchThemes().then((res) => {
            this.themesData=res.data.others
        })
    },
    activated(){
        window.addEventListener('scroll',this.watchScroll)
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
            let top_stories_id=this.swiper_mes[e.activeIndex].id
            router.push({name:'content',params:{id:top_stories_id,frompath:'top_news'}})
        },
        toggle(){
            this.open=!this.open
            this.shadeShow=!this.shadeShow    
        },
        goToThemesList(themesId){
            router.push({name:'themesList',params:{id:themesId}})
        }
    }
}

</script>


<style lang="css">
#header{
    /*position: relative;*/
}
/*.title{
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
    left:-20%;
}*/
.title-box{
    height: 38px;
    width: 100%;
    position: fixed;
    z-index: 3;
}
.title{
    display: block;
    margin:0 auto;
    height: 38px;
    width:200px;
    line-height: 38px;
    text-align: center;
    color:#fff;
    font-weight: bold;
    font-size: 18px;
}
.menu-btn{
    position: absolute;
    left:2%;
    top:10%;
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
.themes-title{
    font-size: 14px !important;
}
.mu-drawer{
    overflow: auto;
}
.head-title{
    font-size: 20px !important;
    font-weight: bold;
}
</style>