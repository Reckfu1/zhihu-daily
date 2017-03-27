<template>
    <div id="header">
        <mu-appbar title="Title" class="title">
            <mu-icon-button icon='menu' slot="left" class="menu-btn" />
        </mu-appbar>
        <div id="swiper">
            <swiper :options="swiperOption">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <swiper-slide>Slide 10</swiper-slide>
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
                paginationClickable: true
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}

</script>


<style lang="css" scoped>
#header{

}
.title{
    text-align: center;
    background-color: transparent;
    height: 38px;
    color:#000;
}
.menu-btn{
    position: absolute;
    top: -4.5px;
}
#swiper{
    height: 100px;
    background-color: gray;
}
</style>