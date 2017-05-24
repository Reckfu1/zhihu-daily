<template>
    <div id="themes-list" class="animated fadeIn" v-show="themesListShow">
        <div class="theme-header">
            <mu-icon value="arrow_back" :size="28" color="white" class="theme-btn" @click="backToHome" />
            <span class="theme-header-title">{{themesListData.name}}</span>
            <img :src="themesListData.image" alt="">
        </div>
        <div class="list-box">
            <div class="list-items" v-for="item in themesListData.stories" @click="getItemContent(item.id)">
                <div class="list-item-title">{{item.title}}</div>
                <div class="list-item-img" v-if="item.images"><img :src="item.images[0]" alt=""></div>
            </div>
        </div>
    </div>
</template>




<script>
import router from '../router'
import {fetchThemesList} from '../api'
export default{
    data(){
        return {
            themesListData:{},
            themesListShow:false,
            themeId:''
        }
    },
    activated(){
        this.themeId=this.$route.params.id
        this.themesListShow=false 
        
        fetchThemesList(this.themeId).then((res) => {
            this.themesListData=res.data
            this.themesListShow=true
        })
    },
    methods:{
        backToHome(){
            router.push({name:'index'})
        },
        getItemContent(id){
            router.push({name:'content',params:{id:id,frompath:'theme_'+this.themeId}})
        }
    }
}

</script>


<style lang="css">
.theme-header{
    height: 38px;
    width: 100%;
    position: fixed;
    top:0;
    /*去白边*/
    overflow:hidden; 
}
.theme-header-title{
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
.theme-btn{
    position: absolute;
    left:2%;
    top:10%;
}
.theme-header img{
    position: absolute;
    top:0;
    z-index:-1; 
    filter: blur(2px);
    height: 38px;
    width:100%;
}
/**/
.list-items{
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.list-item-title{
    height: 65px;
    width: 65%;
    font-weight: bolder;
    font-size: 14px;
    margin-top:-4px;
    margin-right:10px;
}
.list-item-img{
    height: 65px;
    width:24%;
}
.list-item-img img{
    height: 100%;
    width:100%;
}
.list-box{
    margin-top: 38px;
}
</style>